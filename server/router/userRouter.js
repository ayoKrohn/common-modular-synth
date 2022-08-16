import { Router } from "express";
import { db } from "../db/createConn.js";
import bcrypt from "bcrypt";


const saltRounds = 10;
const router = Router();

// -- LOGIN
router.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body;
    
    if (!(email && password)) {
        res.status(400).send("Both email and password are required");
    }

    try {
        let foundUser = await db.get("SELECT * FROM customers WHERE email = ?", [ email ]);
        console.log(foundUser);
        const comparedPassword = await bcrypt.compare(password, foundUser.password);

        if (comparedPassword) { 
        req.session.loggedIn = true;
        req.session.email = foundUser.email;
        
        return res.send(JSON.stringify(foundUser.email));
        }

        else {
        return res.status(401).send("Incorrect login")    
        }
    }

    catch {
        res.status(500).send("Something went wrong!")
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
        return res.status(404).send("Email already exists")
    }
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const { newUser } = await db.run(`INSERT INTO customers (email, password) VALUES (?,?)`, [email, hashedPassword]);
        return res.status(201).send("User created succesfully!");
        
    }
    catch {
        return res.status(500).send("Something went wrong!");
    }
});

// -- LOGOUT
router.get("/api/users/logout", (req, res) => {
    req.session.loggedIn = false;
    return res.send({isLoggedIn: req.session.loggedIn});
});


router.get("/api/users/status", (req, res) => {
        if (req.session.loggedIn) {
            return res.send({userStatus: true});
        }
        else {
            return res.send({userStatus: false})
        }
    }
)

export default router;