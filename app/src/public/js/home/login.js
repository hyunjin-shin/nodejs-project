"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#password");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);


function login(){
    const req = {
        id : id.value,
        pwd : pwd.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/"; // where is 'location' coming? I think it is from dom(global) variable
        } else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error("Error Login");
    });
}