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
    };

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pwd.push(userInfo.pwd);
        return { success : true};
    }
}

module.exports = UserStorage;