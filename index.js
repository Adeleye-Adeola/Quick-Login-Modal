let loginBtn = document.getElementById('login');
let formDiv = document.getElementById('form-div');

loginBtn.addEventListener("click", () => {
    // Create the Sign In form when "Login" is clicked
    showSignInForm();
});

function showSignInForm() {
    // Clear formDiv before rendering
    formDiv.innerHTML = '';

    // Create a new div and form
    const divOne = document.createElement('div');
    divOne.className = "div-1";

    // Create the form
    const form = document.createElement('form');

    // Create the tag
    const tag = document.createElement("h3");
    tag.innerHTML = "Sign in";
    tag.className = "tag";

    // Create an input for username
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Enter username';
    usernameInput.className = "username input";

    // Create an input for password
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Enter password';
    passwordInput.className = "password input";

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Sign in';
    submitButton.className = "submitBtn";
    
    // Create a button to switch to the Create Account form
    const switchToCreateBtn = document.createElement('p');
    switchToCreateBtn.innerHTML = "Don't have an account? Create one";
    switchToCreateBtn.className = "switchBtn";
    switchToCreateBtn.style.cursor = "pointer";

    
    //Create the close button (X) button
    const closeButton = document.createElement('span');
    closeButton.innerHTML = "X";
    closeButton.className = "closeBtn";
    
    // Append inputs to the form
    form.appendChild(tag);
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br')); // Line break
    form.appendChild(submitButton);
    form.appendChild(switchToCreateBtn);
    form.appendChild(closeButton); 
    
    // Append form to divOne
    divOne.appendChild(form);

    // Append divOne to formDiv
    formDiv.appendChild(divOne);

    // Style formDiv
    formDiv.style.position = "absolute";

    // Add event listener to switch to Create Account form
    switchToCreateBtn.addEventListener("click", showCreateAccountForm);

    closeButton.addEventListener('click', () => {
        formDiv.innerHTML = '';  // Clears the formDiv to hide the form
        formDiv.style.position = "static"
    });
}

function showCreateAccountForm() {
    // Clear formDiv before rendering
    formDiv.innerHTML = '';

    // Create a new div and form
    const divOne = document.createElement('div');
    divOne.className = "div-1";

    // Create the form
    const form = document.createElement('form');

    // Create the tag
    const tag = document.createElement("h3");
    tag.innerHTML = "Create Account";
    tag.className = "tag-2";

    // Create an input for username
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Create username';
    usernameInput.className = "username input-2";

    // Create an input for password
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Create password';
    passwordInput.className = "password input-2";

    // Create an input for email
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Enter email';
    emailInput.className = "email input-2";

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Create Account';
    submitButton.className = "submitBtn";

    
    
    // Create a button to switch back to Sign In form
    const switchToSignInBtn = document.createElement('p');
    switchToSignInBtn.innerHTML = "Already have an account? Sign in";
    switchToSignInBtn.className = "switchBtn switch";
    switchToSignInBtn.style.cursor = "pointer";

    //Create the close (X) button
    const closeButton = document.createElement('span');
    closeButton.innerHTML = "X";
    closeButton.className = "closeBtn";
    
    // Append inputs to the form
    form.appendChild(tag);
    form.appendChild(usernameInput);
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br')); // Line break
    form.appendChild(submitButton);
    form.appendChild(switchToSignInBtn);
    form.appendChild(closeButton); 

    // Append form to divOne
    divOne.appendChild(form);

    // Append divOne to formDiv
    formDiv.appendChild(divOne);

    // Style formDiv
    formDiv.style.position = "absolute";

    // Add event listener to switch back to Sign In form
    switchToSignInBtn.addEventListener("click", showSignInForm);

    closeButton.addEventListener('click', () => {
        formDiv.innerHTML = '';  // Clears the formDiv to hide the form
        formDiv.style.position = "static"
    });
}
