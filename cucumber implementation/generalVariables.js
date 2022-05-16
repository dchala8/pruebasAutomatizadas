let initialPassword = "carlosmora345"
let secondPassword = "carlosmora346"
let port1 = '2368'
let port2 = '2369'

// let port = port1
let port = port2

var genVar = {
    user: 'morandres.carlos@gmail.com',
    password: initialPassword,
    tempPassword: secondPassword,
    // password: secondPassword,
    // tempPassword: initialPassword,
    url:`http://localhost:${port}/ghost/#/`,
    port: port
};
module.exports = { genVar };
