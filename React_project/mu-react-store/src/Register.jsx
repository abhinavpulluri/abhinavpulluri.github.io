import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Register() {
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
    const handleClick = () => {
        alert("Hello World");
    };
    const updateCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    }
  return (
    <div>
      <h2>Register</h2>
        <p><input type="text" placeholder='Name' onChange={(e) => setUser({ ...user, name: e.target.value})}/></p>
        <p><input type="email" placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })}/></p>
        <p><input type="password" placeholder='Password' onChange={(e) => setUser({ ...user, pass: e.target.value })}/></p>
        <p><button>Submit</button></p>
        <hr />
        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Forgot password? <a href="/forgot-password">Reset Password</a></p>

        <hr />
            <button onClick={handleClick}>Click</button>
        <hr />
        <h4>
            {count}<br></br>
            <button onClick={updateCount}>+</button>
            <button onClick={decreaseCount}>-</button>
         </h4>
    </div>
  )
}
