function setup() {
    var emailLink = document.getElementById('copy-email');

    if(localStorage.getItem('copyLeft')) {
        emailLink.style.left = '-200px';
        return;
    }

    console.log('Email link:', emailLink);
    if (emailLink) {
        emailLink.addEventListener('click', function(event) {
            if(copyCounter >= copyMessages.length) {
                emailLink.classList.add('depart');
                return;
            }
            event.preventDefault();
            emailLink.innerHTML = copyMessages[copyCounter % copyMessages.length];
            copyCounter++;
            localStorage.setItem('copyLeft', copyCounter);
        });   
    }
}

var copyCounter = 0;

var copyMessages = [
    'Copied',
    'Copied!',
    'Copied (again)',
    'It\s copied, you can paste it now.',
    'Go to your email client and paste it.',
    'Send me an email.',
    'Please stop clicking.',
    'Just go send the email and leave me alone.',
    'Please, stop.',
    'I will leave.',
    'Seriously! I\ll leave this header and never come back.',
    'That\'s it, I\'m out.',
    'Goodbye!',
];

document.addEventListener('DOMContentLoaded', setup);