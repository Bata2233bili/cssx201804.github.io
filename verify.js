// var user= new Map([["123","123"]]);

// function login()
// {
//     var username=document.getElementById("loginusername").value;
//     var password=document.getElementById("loginpassword").value;
//     if(user.get(username)==password)
//     {
//         alert("login success");
//         window.location.href="./index.html";
//     }
//     else
//     {
//         alert("用户名或密码错误");
//     }
// }
let count = document.querySelector("#count");
let pwd = document.querySelector("#pwd");
const mycount = 123;
const mypwd = 456;
function login() {
    if (count == mycount && 456 == mypwd) {
        alert("登录成功");
        window.location.href = "./index.html";
    } else {
        alert("用户名或密码错误");
    }
}