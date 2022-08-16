import { db } from "./createConn.js";

const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS customers;");
    db.exec("DROP TABLE IF EXISTS synths;");
}

// CUSTOMERS
db.exec(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(40), password VARCHAR(20) 
);`);

// SYNTHS
db.exec(`CREATE TABLE IF NOT EXISTS synths (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName VARCHAR(100), 
    description VARCHAR(300),
    price DOUBLE,
    image VARCHAR(70)
);`);



db.exec
// Seed my database
if (deleteMode) {
    db.run(`INSERT INTO customers (email, password) VALUES ('molle@mail.dk', '1234')`);
    db.run(`INSERT INTO customers (email, password) VALUES ('rikkep@mail.dk', 'musse89')`);
    db.run(`INSERT INTO customers (email, password) VALUES ('ayokrohn@gmail.com', 'maah')`);

    db.run(`INSERT INTO synths (productName, description, price, image) VALUES ('Groovesizer TB2 Kit', 
    'TB2The TB2 is a 4 voice paraphonic wavetable synth shield for the Arduino Due development board. 
    The TB2 features 2 oscillators per voice, an ADSR envelope, LFO, digital filter,  arpeggiator, 
    as well as a 16-step sequencer.', 
    135, "img/products/tb2.jpg")`);
    
    db.run(`INSERT INTO synths (productName, description, price, image) VALUES ('Groovesizer Theremon Kit', 
    'Theremon is a digital theremin-style instrument and MIDI controller. Like a traditional theremin, 
    Theremon is played without physical contact with one hand controlling pitch, and the other volume.', 
    125, "img/products/theremon.jpg")`);

    db.run(`INSERT INTO synths (productName, description, price, image) VALUES ('Groovesizer RED Kit', 
    'The Groovesizer RED is a DIY 16-step sequencer and granular synth. 
    It is based on the original Groovesizer mk1 Arduino project. 
    It features 16 LEDs (one per step), 5 potentiometers, and 5 buttons, MIDI input and ouput on 5-pin DINs, 
    MIDI sync in and out, and audio out (mono) on an 1/8″ jack.  ', 
    130, "img/products/red.jpg")`);

    db.run(`INSERT INTO synths (productName, description, price, image) VALUES ('Groovesizer MultiBoard Kit', 
    'The Groovesizer MB (for multiboard) is a DIY 8-bit audio platform. 
    It is a musical chameleon that can take on a number of different roles from sequencer to synth, 
    drum machine, or midi controller. ', 
    125, "img/products/mb.jpg")`);

    db.run(`INSERT INTO synths (productName, description, price, image) VALUES ('Ekkoflok Oscitrode Kit', 
    'A synthesizer controlled by your skin and breath.
    You extend the circuit by letting the current flow through you and the circuit extends you by turning 
    the physical contact into sounds yielding from simple oscillations to complex and chaotic patterns.', 
    25, "img/products/oscitrode.jpg")`);

}


db.close();