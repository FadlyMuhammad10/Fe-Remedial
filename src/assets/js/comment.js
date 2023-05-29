// function render(data){
//     var html = "<div class='commentBox'><span>Nova Sriady</span><div class='email'>novasriady@gmail.com</div><p>Tes123</p></div>"
//     $('#comment-1').append(html);
// }

// $(document).ready(function(){
//     var coment;
//     if(!localStorage.comentData){
//         localStorage.comentData = [];
//     }else{
//         coment = JSON.parse(localStorage.comentData);
//     }   
//         for(var i=0;i<coment.length;i++){
//             render(coment[i]);
//         }
//     $('#addComment').click(function(){
//         var addObj = {
//             "name": $('#name').val(),
//             "email": $('#email').val(),
//             "message": $('#message').val(),
//         }
//         coment.push(addObj);
//         localStorage.comentData=JSON.render(addObj);
//         $('#name').val('');
//         $('#email').val('');
//         $('#message').val('');
//     })

// })
let sendBtn = document.getElementById('send');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value And LocalStorage
    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);

});