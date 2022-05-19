const validData = [
                    {name: "Jorge Suárez", email: "jorge.suarez@correo.com", note: "Esta es una nota muy especial"},
                    {name: "Luisa Pérez", email: "luisa.perez@correo.com", note: "Nota que identifica al nuevo miembro"},
                    {name: "Carla Rugéles", email: "carla.rugeles@correo.com", note: "Información importante del miembro"},
                    {name: "Mario Díaz", email: "mario.diaz@correo.com", note: "Esta es una nota muy especial"},
                    {name: "Marcos Sánchez", email: "marcos.sanchez@correo.com", note: "Nota que identifica al nuevo miembro"},
                    {name: "Rocio Cárdenas", email: "rocio.cardenas@correo.com", note: "Información importante del miembro"},
                    {name: "Juan Linares", email: "juan.linares@correo.com", note: "Esta es una nota muy especial"}
                ];

function getValidRow(){
    let rndInt = Math.floor(Math.random() * validData.length)
    return validData[rndInt];
}

module.exports = {
    getValidRow
}