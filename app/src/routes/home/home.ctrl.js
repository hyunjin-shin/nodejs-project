"use strict";

const users = {
    id: ["jin", "hello", "canada"],
    pwd: ["1234", "abcd", "welcome"]
};

const output = {
    home: (req, res)=>{
        res.render("home/index");
    },
    login: (req, res)=>{
        res.render("home/login");
    }
}

const process = {
    login: (req, res)=>{
        const id = req.body.id;
        const pwd = req.body.pwd;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                return res.json({
                    success: true,
                })
            }
        }
        return res.json({
            success: false,
            msg: "Login failed"
        })
    }
}

module.exports = {
    output,
    process
};
