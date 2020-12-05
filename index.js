function show() {
    const nav_item = document.getElementById('nav-item');
    nav_item.style.display = "block";
}
function unshow() {
    const nav_item = document.getElementById('nav-item');
    nav_item.style.display = "none";
}
function sendEmail() {
    const sender_mail = document.getElementById('sender-mail');
    const email_subject = document.getElementById('email-subject');
    const sender_message = document.getElementById('sender-message');
    Email.send({
        Host: "smtp.gmail.com",
        Username : sender_mail.value,
        Password : "Medo@1994",
        To : 'medomiriam@gmail.com',
        From : sender_mail.value,
        Subject : email_subject.value,
        Body : sender_message.value,
        }).then(
            message => alert("mail sent successfully")
        ); 
}