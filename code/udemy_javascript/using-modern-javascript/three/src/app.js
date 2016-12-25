var _ = require("lodash");

const users = [
    {id: 1, name: "Nelson", roles: ["admin"]},
    {id: 2, name: "Vova", roles: ["registered", "moderator"]},
    {id: 3, name: "Lena", roles: []},
    {id: 4, name: "Misha", roles: ["registered"]}
];

const admins = users.filter(( {roles} ) => {
    return roles.some( name => name === "admin");
});

//console.log(admins);

const userRoleList = users.map(( {name, roles} ) => `${name}: ${roles.join(", ")}`);

//console.log(userRoleList)

var array = require("lodash/array");
console.log(array.first(users))