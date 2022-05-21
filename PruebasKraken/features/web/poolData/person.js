const validData = [
                    {name: "Jorge Suárez", email: "jorge.suarez@correo.com", note: "Esta es una nota muy especial", bio: "Fecha de nacimiento: 2 de Marzo de 1977 Lugar de nacimiento: Devon, Reino Unido Ocupación: Cantautor, guitarrista"},
                    {name: "Luisa Pérez", email: "luisa.perez@correo.com", note: "Nota que identifica al nuevo miembro", bio: "Actriz de televisión Adelaide Kane es una actriz australiana. Kane nació el 9 de agosto de 1990 en Claremont"},
                    {name: "Carla Rugéles", email: "carla.rugeles@correo.com", note: "Información importante del miembro", bio: "es un tenista profesional suizo que actualmente ocupa el puesto número 3 del mundo por el Asociación de"},
                    {name: "Mario Díaz", email: "mario.diaz@correo.com", note: "Esta es una nota muy especial", bio: "Actor de cine Michael Brown, conocido profesionalmente como Michael Ealy, es un actor estadounidense"},
                    {name: "Marcos Sánchez", email: "marcos.sanchez@correo.com", note: "Nota que identifica al nuevo miembro", bio: "Es un actor y director estadounidense. Es mejor conocido por aparecer en el exitoso drama"},
                    {name: "Rocio Cárdenas", email: "rocio.cardenas@correo.com", note: "Información importante del miembro", bio: "Personalidad de televisión Kylie Kristen Jenner es una personalidad, modelo, actriz y empresaria de la televisión"},
                    {name: "Juan Linares", email: "juan.linares@correo.com", note: "Esta es una nota muy especial", bio: "Es un actor estadounidense. Es mejor conocido por ganar el Premio de la Academia al Mejor Actor "}
                ];

function getValidRow(){
    let rndInt = Math.floor(Math.random() * validData.length)
    return validData[rndInt];
}

module.exports = {
    getValidRow
}