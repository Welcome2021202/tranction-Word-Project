document.getElementById('sendMessageButton').addEventListener('click',sendMessageButton);
function sendMessageButton(event) {
    debugger
    let emailRgex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let fnameRegx = /^[A-z]$/;
    var getFname = document.getElementById('getFname').value;
    var getEmail =document.getElementById('getEmail').value;
    var emaiTest = emailRgex.test(getEmail);
    var fnameTest = fnameRegx.test(getFname);
    if (emaiTest==false && fnameTest==false) {
        document.getElementsByClassName('error-msg')[0].style.display = "block";
        document.getElementsByClassName('error-msg')[1].style.display = "block";

        console.log('hi')
        // event.preventDefault();
    }

}