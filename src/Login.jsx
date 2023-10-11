import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from './assessts/loginpic.avif';

function Login() {
    const navigate = useNavigate();


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [newEntry, setNewEntry] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login Successfull')
        navigate('/home')
    }
    const haldSignup = () => navigate('/')

    return (
        <>
            <div className="my-[50px] container mx-auto flex justify-center">
                <div className=" flex md:flex-row flex-col justify-center bg-blue-400 rounded-2xl md:p-5 p-0">

                    <div className="md:w-[500px] w-fit container mx-auto">
                        <img src={loginImage} />
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white brightness-100 md:pt-[150px] p-6  md:pb-[150px] flex flex-col justify-between gap-5">
                        <div className="flex  justify-between gap-3">
                            <lable htmlFor="username" className='md:text-xl' >Username</lable>
                            <input type="text" required name="username" value={username} onChange={(e) => setUsername(e.target.username)} autoComplete="off" className="bg-blue-200 rounded" />
                        </div>
                        <div className="flex  justify-between gap-3 ">
                            <lable htmlFor="password" className='md:text-xl' >Password</lable>
                            <input type="password" required name="password" value={password} onChange={(e) => setPassword(e.target.password)} autoComplete="off" className="bg-blue-200 rounded" />
                        </div>
                        <div className="flex  justify-between ">
                            <button type="submit" className="p-2 pr-7 pl-7 text-white bg-blue-800 rounded-lg text-center">Login</button>
                            <button type="submit" onClick={haldSignup} className="p-2 pr-7 pl-7 text-white bg-blue-800 rounded-lg text-center">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;