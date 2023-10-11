import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupSideImage from './assessts/signupside.avif';

function SignUp() {
    const navigate = useNavigate();

    const [userRagistration, setUserRagistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const [storeData, setStoreData] = useState([])

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);

        setUserRagistration({ ...userRagistration, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Now you are Member of team ')
        const newData = { ...userRagistration, id: new Date().getTime().toString() }
        setStoreData([...storeData, newData])
        setUserRagistration({ username: "", email: "", phone: "", password: "" })
        navigate('/home');

    }
    const handleLoginPage = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="my-[50px] container mx-auto flex justify-center">
                <div className=" flex md:flex-row flex-col justify-between  bg-blue-400 rounded-2xl md:p-5 p-0">
                    <div className="md:w-[500px] w-fit container mx-auto">
                        <img src={SignupSideImage} />
                    </div>


                    <form onSubmit={handleSubmit} className="bg-white brightness-100 md:p-10 p-4 flex flex-col justify-between ">

                        <div className="flex  justify-between ">
                            <label htmlFor="username" className="md:text-xl text-slate-800">FullName</label>
                            <input type="text" required name="username" value={userRagistration.username} onChange={handleInput} className="rounded md:w-[230px] bg-blue-200" />
                        </div>

                        <div className="flex flex-row justify-between gap-8  md:space-y-0 space-y-2">
                            <lable htmlFor='email' className='md:text-xl text-slate-800'>Email</lable>
                            <input type="email" required name="email" value={userRagistration.email} onChange={handleInput} className="rounded md:w-[230px] bg-blue-200" />
                        </div>
                        <div className="flex flex-row justify-between gap-8  md:space-y-0 space-y-2">
                            <lable htmlFor="phone" className='md:text-xl text-slate-800' >Phone</lable>
                            <input type="tel" required name="phone" value={userRagistration.phone} onChange={handleInput} className="rounded md:w-[230px]  bg-blue-200" />
                        </div>

                        <div className="flex justify-between gap-8  md:space-y-0 space-y-2">
                            <lable htmlFor="password" className='md:text-xl text-slate-800'>Password</lable>
                            <input type="password" required name="password" value={userRagistration.password} onChange={handleInput} className="rounded md:w-[230px]  bg-blue-200" />
                        </div>

                        <div className="flex flex-row  justify-between my-3">
                            <button type="submit" className="p-2  md:pr-7 md:pl-7 text-white bg-blue-800 rounded-lg text-center">SignUp</button>
                            <button onClick={handleLoginPage} type="click" className="p-2 md:pr-7 md:pl-7 text-white bg-blue-800 rounded-lg text-center">Login</button>
                        </div>
                    </form>

                    {/* This storeData.map() for showing raisterdata  after the ragistration  */}


                    {/* <div>
                {
                    storeData.map((currentData) => {
                        return (
                            <>

                                <div>
                                    <p>{currentData.username}</p>
                                    <p>{currentData.email}</p>
                                    <p>{currentData.phone}</p>
                                    <p>{currentData.password}</p>
                                </div>
                            </>
                        )

                    })
                }
            </div> */}
                </div>
            </div>
        </>
    )
}

export default SignUp;