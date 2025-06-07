const users = [];
let user = {};

const showLogin = () => {
    let str= `
    <div>
    <h1>Login form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button onclick="validateUser()">Login</button></p>
    <p><button onclick="showRegister()">Create account</button></p>
    </div>
    `;

    root.innerHTML = str;
}

const showRegister = () => {
    let str= `
    <div>
    <h1>Registration form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPassword" placeholder="Password"></p>
    <p><button onclick="addUser()">Register</button></p>
    <hr>
    <p><button onclick="showLogin()">Already have an account?</button></p>
    </div>
    `;

    root.innerHTML = str;
}

const showHome = () => {
    let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p>
        <select id="actionSelect">
            <option value="0">--Select--</option>
            <option value="1">Deposit</option>
            <option value="2">Withdraw</option>
        </select>
    </p>
    <p>
    <input type="number" id="txtAmount" placeholder="Amount">
    </p>
    <p><button onclick="handleTransaction()">Submit</button></p>
    <p id="transactionMsg"></p>
    <button onclick="showLogin()">Logout</button>
    <p>Current balance:${user.balance}</p>
    `;
    root.innerHTML = str;
}

function handleTransaction() {
    const action = document.getElementById("actionSelect").value;
    const amount = parseFloat(document.getElementById("txtAmount").value);
    const msgDiv = document.getElementById("transactionMsg");
    if (isNaN(amount) || amount <= 0) {
        msgDiv.innerHTML = "Please enter a valid amount.";
        return;
    }
    if (action === "1") {
        depositAmount(amount);
    } else if (action === "2") {
        withdrawAmount(amount);
    } else {
        msgDiv.innerHTML = "Please select an action.";
    }
}

function depositAmount(amount) {
    user.balance += amount;
    showHome();
    document.getElementById("transactionMsg").innerHTML = `Deposited ₹${amount}`;
}

function withdrawAmount(amount) {
    if (user.balance >= amount) {
        user.balance -= amount;
        showHome();
        document.getElementById("transactionMsg").innerHTML = `Withdrew ₹${amount}`;
    } else {
        document.getElementById("transactionMsg").innerHTML = "Insufficient balance.";
    }
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
    
    user = users.find(e => e.email === email && e.password === password);

    if(user){
        showHome();
    }
    else{
        dvMsg.innerHTML = "Invalid email or password";
    }
}