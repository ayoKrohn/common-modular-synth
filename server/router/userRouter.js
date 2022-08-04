import { Router } from "express";
import { db } from "../db/createConn.js";
import bcrypt from "bcrypt";


const saltRounds = 10;
const router = Router();

// -- LOGIN
router.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body.loginData;

    /*if (!(email && password)) {
        res.status(400).send("Both email and password are required");
        return;
    }*/

    //const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        let foundUser = await db.get("SELECT * FROM customers WHERE email = ?", [ email ]);
        console.log(foundUser);
        const comparedPassword = await bcrypt.compare(password, foundUser.password);

        if (comparedPassword && !req.session.loggedIn) { 
        req.session.loggedIn = true;
        req.session.email = foundUser.email;
        res.status(200).send(foundUser);
        return;
        }

        else if (req.session.loggedIn) {
        res.status(406).send(foundUser);
        }
    }

    catch {
        return res.status(404).send("FAAAAAIL")
    }
});

// -- SIGNUP 
router.post("/api/users/signup", async (req, res) => {
    
    const { email, password } = req.body;

    if (!(email && password)) {
        return res.status(400).send("Both email and password are required");
    }

    const emailExists = await db.get("SELECT * FROM customers WHERE email = ?", [ email ]);

    if (emailExists) {
        return res.status(404).send("Email already exists. Try to log in instead.")
    }
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const { newUser } = await db.run(`INSERT INTO customers (email, password) VALUES (?,?)`, [email, hashedPassword]);
        return res.status(201).send("User created succesfully!");
        
    }
    catch {
        return res.status(500).send("Something went wrong");
    }
});

// -- LOGOUT
router.delete('/api/users/logout', (req, res) => {
if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
})


/*router.post("/api/users/logout", (req, res) =>{
    
    if (req.session.loggedIn) { 
        req.session.loggedIn = false;
    }   
    return res.send("User is logged out");
});*/

router.get("/api/users/status", (req, res) => {
    if (req.session.loggedIn) {
        return res.send("DU er logget super meget ind"); //req.session.loggedIn);

    } else {
    return res.send("Baaaaa"); //req.session.loggedIn);
    }
})

export default router;