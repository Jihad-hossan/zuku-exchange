// Set a alert
const setAlert = ( msg, type='danger' ) => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${ msg }
    <button data-bs-dismiss="alert" class="btn-close"></button>
    </p>`;
}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
    
// }



