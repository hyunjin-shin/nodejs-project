"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        const { id, pwd } = UserStorage.getUserInfo(client.id);

        if(id){
            if( id === client.id && pwd === client.pwd){
                return {success: true};
            }
            return {success: false, msg: "Wrong password"};
        }
        return {success: false, msg: "Wrong ID"};
    };

    register(){
        const response = UserStorage.save(this.body);
        return response;
    }

}

module.exports = User;