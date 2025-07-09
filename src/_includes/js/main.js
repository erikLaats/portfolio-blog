function setup() {
    var emailLink = document.getElementById('copy-email');

    console.log('Email link:', emailLink);
    if (emailLink) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault();

            var message = copyMessages[copyCounter % copyMessages.length];
            message = "Copied! (" + (9 - copyCounter) + ")"

            emailLink.innerHTML = message
            copyCounter++;

            if(copyCounter >= maxCopies)
            {
                emailLink.innerHTML = ""
                const img = document.createElement('img');
                img.classList.add('explosion')
                img.src = '../images/explosion.gif'; // make sure the GIF is set to loop=0
                emailLink.appendChild(img);
            }
        });   
    }
}

var copyCounter = 0;
var maxCopies = 10

var copyMessages = [
    'Copy Counter',
];

document.addEventListener('DOMContentLoaded', setup);