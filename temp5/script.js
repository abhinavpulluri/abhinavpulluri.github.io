const users = [];
const user = {};

const showLogin = () => {
    let str= `
    <h1>Login form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button onclick="validateUser()">Login</button></p>
    <p><button onclick="showRegister()">Create account</button></p>
    `;

    root.innerHTML = str;
}

const showRegister = () => {
    let str= `
    <h1>Registration form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button onclick="addUser()">Register</button></p>
    <p><button onclick="showLogin()">Already have an account?</button></p>
    `;

    root.innerHTML = str;
}

const showWelcome = (user) => {
    let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p>
        <select>
            <option value=0>Select an option</option>
            <option value=1>Deposit</option>
            <option value=2>Withdraw</option>
        </select>
    </p>
    <p>
    <input type="number" id="txtAmount" placeholder="Amount">
    </p>
    <p><button>Submit</button></p>

    <button onclick="showLogin()">Logout</button>
    <p>Current balance:${user.balance}</p>
    `;
    root.innerHTML = str;
}

const addUser = () => {
    const user = {
        name: document.getElementById("txtName").value,
        email: document.getElementById("txtEmail").value,
        password: document.getElementById("txtPassword").value,
        balance: 0
    }

    users.push(user);
    console.log(users);
    showLogin();
}

const validateUser = () => {
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;   
    
    const found = users.find(user => user.email === email && user.password === password);
    console.log(found);
    if(found){
        showWelcome(found);
    }
    else{
        document.getElementById("dvMsg").innerHTML = "Invalid email or password";
    }
}