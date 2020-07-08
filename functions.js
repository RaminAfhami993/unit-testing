const axios = require('axios');

const functions = {
    add: (a, b) => {
        return a + b;
    },
    isNull: () => null,
    isUndefined: () => undefined,
    falsy: x => x,
    truthy: x => x,
    createUser: () => {
        return {
            name: "ramin",
            age: 20
        }
    },
    fetchUser: () => axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
};




module.exports = functions;