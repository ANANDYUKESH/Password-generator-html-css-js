const passbox=document.getElementById("input");
const length=14;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZabc";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="01234567889";
const symbols="@#$%!&*()<>?|:=<>";
const allchar=uppercase+lowercase+number+symbols;

function createpassword(){
    let password='';
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
 while(length > password.length){
    password+=allchar[Math.floor(Math.random()*allchar.length)];
 }
 passbox.value=password;
}
function copypass(){
    passbox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}