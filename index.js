const { app } = require('./core'); 
const { db, update } = require('./db'); // Importerar filer och metoder

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */

// Hämta ut alla producterna till insomnia
app.get('/devices', (req, res) => {
    let devices = db.get('devices').value()
    res.send(JSON.stringify({ devices: devices }))
});

// AC - on
app.get('/AC/on', (req, res) => {
    db.get('devices')
    .find({ id: "AC1" }) // Letar efter ett specifikt ID
    .assign({ on: true }) // Sätter värdet till antingen true/false beroende på om den ska sättas på eller stängas av.
    .value();

    update(); // Uppdaterar statet, browsern
    res.send('AC är på!'); // Skickar ut en meddelande i insomnia vad som sker.
});

// AC - off
app.put('/AC/off', (req, res) => {
    db.get('devices')
    .find({ id: "AC1"})
    .assign({ on: false})
    .value();

    update();
    res.send('AC är avstängd!')
})

// Blind - on
app.get('/Blind/on', (req, res) => {
    db.get('devices')
    .find({ id: 'BLI1' })
    .assign({ on: true })
    .value();

    update();
    res.send('Blind är på!')
})

// Blind - off
app.put('/Blind/off', (req, res) => {
    db.get('devices')
    .find({ id: 'BLI1' })
    .assign({ on: false })
    .value();

    update();
    res.send('Blind är avstängd!')
})

// Kamera - on
app.get('/camera/on', (req, res) => {
    db.get('devices')
    .find({ id: 'CAM1' })
    .assign({ on: true })
    .value();

    update();
    res.send('Kameran är på!')
})

// Kamera - off
app.put('/camera/off', (req, res) => {
    db.get('devices')
    .find({ id: 'CAM1' })
    .assign({ on: false })
    .value();

    update();
    res.send('Kameran är avstängd!')
})

// Lock - front door
app.get('/frontdoor/locked', (req, res) => {
    db.get('devices')
    .find({ id: 'LOC1' })
    .assign({ locked: false })
    .value();

    update();
    res.send('Dörren är låst!')
})

// unlocked - front door
app.get('/frontdoor/unlocked', (req, res) => {
    db.get('devices')
    .find({ id: 'LOC1' })
    .assign({ locked: true })
    .value();

    update();
    res.send('Dörren är olåst!')
})

// Vaccum - on
app.get('/vaccum/on', (req, res) => {
    db.get('devices')
    .find({ id: 'VAC1' })
    .assign({ on: true })
    .value();

    update();
    res.send('Vaccum är på!')
})

// Vaccum - off
app.put('/vaccum/off', (req, res) => {
    db.get('devices')
    .find({ id: 'VAC1' })
    .assign({ on: false })
    .value();

    update();
    res.send('Vaccum är avstängd!')
})

// Speaker - on
app.get('/speaker/on', (req, res) => {
    db.get('devices')
    .find({ id: 'SPE1' })
    .assign({ on: true })
    .value();

    update();
    res.send('Speakern är på!')
})

// Speaker - off
app.put('/speaker/off', (req, res) => {
    db.get('devices')
    .find({ id: 'SPE1' })
    .assign({ on: false })
    .value();

    update();
    res.send('Speakern är avstängd!')
})

// lamporna - on
app.get('/light/on/:id', (req, res) => {
    let {id} = req.params 

    db.get('devices')
    .find({ id: id })
    .assign({ on: true, brigthness: 0.5 }) // Lägger till en brigthness på lamporna när dem är tända
    .value();

    update();
    res.send('Lampan är tänd!');
})

// lamporna - off
app.put('/light/off/:id', (req, res) => {
    let {id} = req.params
    
    db.get('devices')
    .find({ id: id })
    .assign({ on: false })
    .value();

    update();
    res.send('Lampan är släckt!');
})
