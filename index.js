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
        SecureToken : "f6c78810-52ae-4f28-815a-6c9669c371d4",
        To : 'medomiriam@gmail.com',
        From : sender_mail.value,
        Subject : email_subject.value,
        Body : sender_message.value,
        }).then(
            error => alert("mail not sent")
        );

}