"use strict";

class UserStorage{
    static #users = {
        id: ["jin", "hello", "canada"],
        pwd: ["1234", "abcd", "welcome"],
        name: ["Hyunjin", "World", "America"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    

}

module.exports = UserStorage;