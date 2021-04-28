const { app } = require('./core'); 
const { db, update } = require('./db');

/* 
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : true }) // Turn on the device
    .value();

    update(); // tell frontend to update state.
*/

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
    .find({ id: "AC1" })
    .assign({ on: true })
    .value();

    update();
    res.send('AC är på!');
});

// AC - off
app.get('/AC/off', (req, res) => {
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
app.get('/Blind/off', (req, res) => {
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
app.get('/camera/off', (req, res) => {
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
app.get('/vaccum/off', (req, res) => {
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
app.get('/speaker/off', (req, res) => {
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
    .assign({ on: true, brigthness: 0.5 })
    .value();

    update();
    res.send('Lampan är tänd!');
})

// lamporna - off
app.get('/light/off/:id', (req, res) => {
    let {id} = req.params
    
    db.get('devices')
    .find({ id: id })
    .assign({ on: false })
    .value();

    update();
    res.send('Lampan är släckt!');
})
