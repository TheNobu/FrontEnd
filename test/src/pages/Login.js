import Input from '../components/Input';
import './Login.css'
import {useState} from 'react'

const [email,setEmail]= useState()
const [password,setPassword] = useState()

const onChangeEmail = (event) =>{
    setEmail(event.target.value)
}

const onChangePassword = (event) =>{
    
}

const Login = () => {
    return (
        <div>
            <Input
            
            />
        </div>
    );
}

export default Login;