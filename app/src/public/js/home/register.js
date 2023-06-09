"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pwd = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm-password");
const loginBtn = document.querySelector("#button");
console.log("Hello register")
loginBtn.addEventListener("click", register);

function register(){
    event.preventDefault();
    if(!id.value) return alert("id must not be empty");
    if(pwd.value !== confirmPwd.value) return alert("passwords should be the same");
    //return to where? I think it means just exit the function.
    

    const req = {
        id : id.value,
        name : name.value,
        pwd : pwd.value,
    };
    console.log(req);

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login"; // where is 'location' coming? I think it is from dom(global) variable
        } else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error("Error Login");
    });
}