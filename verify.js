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

// const mycount = 123;
// const mypwd = 456;
// function login() {
//     var count = document.querySelector("#count").value;
//     var pwd = document.querySelector("#pwd").value;
//     console.log(count, pwd);
//     if (count == mycount && mypwd==pwd) {
//         alert("登录成功");
//         window.location.href = "./index.html";
//     } else {
//         alert("用户名或密码错误");
//     }
// }

var user = new Map([["admin", "登录这个账号，除了zzh和管理，其他都会被封ip"],["ZouQM","Zou114514"]]);

function login() {
    var countElement = document.querySelector("#count");
    var pwdElement = document.querySelector("#pwd");

    if (!countElement || !pwdElement) {
        console.error("无法找到指定的元素");
        return;
    }

    var count = countElement.value;
    var pwd = pwdElement.value;

    console.log(count, pwd);

    if (user.get(count)==pwd) {
        alert("登录成功");
        window.location.href = "./index.html";
    } else {
        alert("用户名或密码错误");
    }
}

// 确保 DOM 加载完成后再绑定事件
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#loginForm button').addEventListener('click', login);
});