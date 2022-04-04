import { useState, useContext } from 'react'
import { GeneralAuthContext } from './context/GeneralAuthContext'
import logo from './logo.svg';
import './App.css';
import FormProducts from './component/FormProducts';

function App() {
  const { sigUpwithEmailAndPassword, user, logOut, logignWithEmail } = useContext(GeneralAuthContext)

  const [newUser, setNewUser] = useState({ email: "", password: "" })
  const [loginUser, setLoginUser] = useState({ email: "", password: "" })
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Register</h1>
          <input onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} placeholder="type your email" />
          <input onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} placeholder="type your password" />
          <button onClick={() => sigUpwithEmailAndPassword(newUser.email, newUser.password)}>Register</button>
        </div>
        <div>
          <button onClick={() => logOut()}>Log out {user?.email}</button>
        </div>
        <div>
          <h1>Login</h1>
          <input onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })} placeholder="type your email" />
          <input onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })} placeholder="type your password" />
          <button onClick={() => logignWithEmail(loginUser.email, loginUser.password)}>Login </button>
        </div>
        <FormProducts />
      </header>
    </div>
  );
}

export default App;