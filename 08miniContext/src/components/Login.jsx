import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    function handleSubmit(e) {
        e.preventDefault();
        setUser({ username, password });


    }
    return (
        <div>
            <input type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='enter your name' />
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login