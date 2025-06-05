const showLogin = () => {
    let str= `
    <h1>Login form</h1>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button onclick="showWelcome()">Login</button></p>
    <p><button onclick="showRegister()">Create account</button></p>
    `

    root.innerHTML = str;
}

const showRegister = () => {
    let str= `
    <h1>Registration form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button>Register</button></p>
    <p><button onclick="showLogin()">Already have an account?</button></p>
    `

    root.innerHTML = str;
}

const showWelcome = () => {
    let str = `
    <h1>Welcome</h1>
    `
    root.innerHTML = str;
}