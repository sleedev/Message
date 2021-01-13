const { hash } = window.location;

const message = atob(hash.replace('#', ''));
//now we decoded the message by replacing the # before the encryption and revealing
//the atob message

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    //definined the encrypted variable to encrypt the input value the user typed in

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    //now this value in the link input is encrypted
    linkInput.select();
});
//submit event handler for form
//selecting the form to add an even listener to the submit event
//callback on the event object
//when form is submitted, the page refresehes and  moves it to backend server by default. 
//but we don't have a backend server here.
//prevent defaults stops this. now the page won't refresh

