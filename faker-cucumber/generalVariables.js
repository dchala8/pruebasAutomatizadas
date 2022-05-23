let initialPassword = "mateo041993"
let secondPassword = "mateo041993"
let port1 = '2368'
// let port2 = '2369'
let validLanguages = ['en','es','fr','de','pt','zh']

let port = port1
// let port = port2

var genVar = {
    user: 'daachalabu@unal.edu.co',
    password: initialPassword,
    tempPassword: secondPassword,
    // password: secondPassword,
    // tempPassword: initialPassword,
    url:`http://localhost:${port}/ghost/#/`,
    port: port,
    port1: port1,
    // port2: port2,
    validLanguages
};
module.exports = { genVar };
