const db = require ("../utils/database");
const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const Tasks = require("../models/tasks.models");
const Users = require("../models/users.models");
const initModels = require("../models/initModels");

initModels();


const users =[
    { username: 'Teresa', email: 'teresa@gmail.com', password:'1234'},
    { username: 'Ana', email: 'ana@gmail.com', password:'45343'},
    { username: 'Lina', email: 'lina@gmail.com', password:'345466'},
];
const addreses =[
    { street: 'buena vista', number: 127, userId:1},
    { street: 'patio bonito', number: 1123, userId:2},
    { street: 'floresta', number: 227, userId:3},
];
const tasks =[
    { title: 'hacer ejercicio', description: 'gluteos', userId:1},
    { title: 'portafolio', description: 'hacer portafolio vainila js', userId:2},
    { title: 'viajar', userId:3},
];
const categories =[
    { name: 'ocio'},
    { name: 'trabajo'},
    { name: 'metas'},
    { name: 'mascotas'},
    { name: 'belleza'},
    { name: 'estudio'},
];


db.sync({ force: true })
.then(async ()=> {
    users.forEach((e)=>Users.create(e));
})
    .then(()=> {
        categories.forEach((e)=>Categories.create(e));
    })
    .then(()=> {
        tasks.forEach((e)=>Tasks.create(e));
    })
    .then(()=> {
        addreses.forEach((e)=>Address.create(e))
    })
    .catch((error)=>console.log(error));
