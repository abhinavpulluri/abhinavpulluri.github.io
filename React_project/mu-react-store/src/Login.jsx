import React from 'react'

export default function Login() {
  return (
    <div>
        <h2>Login</h2>
        <p><input type="text" placeholder='Name'/></p>
        <p><input type="password" placeholder='Password'/></p>
        <p><button>Login</button></p>
        <hr />
        <p>Don't have an account? <a href="/register">Register</a></p>
        <p>Forgot password? <a href="/forgot-password">Reset Password</a></p>
    </div>
  )
}
