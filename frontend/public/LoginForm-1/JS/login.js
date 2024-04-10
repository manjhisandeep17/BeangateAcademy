function login(){
    document.getElementById('btn1').style.backgroundColor="#5fcf80";
    document.getElementById('btn2').style.backgroundColor="#191919";
}
function singup(){
    document.getElementById('btn1').style.backgroundColor="#191919";
    document.getElementById('btn2').style.backgroundColor="#5fcf80";
}
// show & hide password
function showpassword(){
    let showpass = document.getElementById('password');    
    if(showpass.type=='password'){
        showpass.type='text';
    }else{
        showpass.type='password';
    }
}





