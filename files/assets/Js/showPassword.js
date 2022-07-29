const span = document.querySelector(".copyText");
let spanText = span.innerText;
const allPasswords = document.querySelectorAll('.password');
const starText = "****";

allPasswords.forEach(password => {
    password.querySelector(".copyText").querySelector('.show_hide').innerText= starText;
    const passwordText = password.querySelector('.invisible_pw').innerHTML;

    password.querySelector('.show').addEventListener('click', function() {
        password.querySelector(".copyText").querySelector('.show_hide').innerText  = spanText;
        password.querySelector('.show').style.display = 'none';
        password.querySelector('.hide').style.display = 'block';
    });
    password.querySelector('.hide').addEventListener('click', function() {
        if (!spanText.indexOf("*")) {
            document.querySelector(".copyText").innerText = span.getAttribute("textContent");
            return;
        }
        password.querySelector(".copyText").querySelector('.show_hide').innerText = starText;
        password.querySelector('.hide').style.display = 'none';
        password.querySelector('.show').style.display = 'block';
    })
});
