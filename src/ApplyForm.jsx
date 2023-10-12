import { useLocation } from "react-router-dom";
import { HiHomeModern } from 'react-icons/hi2';
import { ImLocation } from 'react-icons/im';
import { useNavigate } from "react-router-dom";
import { useState } from "react";




function ApplyForm() {
    const navigate = useNavigate();
    const location = useLocation();


    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [add, setAdd] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Apply Successfull')
        navigate('/home')
    }

    return (
        <>
            <div className="my-[50px] container mx-auto flex justify-center">

                <div className=" flex md:flex-row flex-col justify-center bg-blue-400 rounded-2xl md:p-5 p-0">


                    <div className="flex flex-col justify-center md:p-4 md:gap-5 bg-white p-4">
                        <h1 className="text-2xl text-blue-600 font-semibold font-serif">{location.state.ti}</h1>
                        <h1 className="text-xl text-slate-900 font-serif"><HiHomeModern size={20} />{location.state.Com}</h1>
                        <p className="text-xl text-slate-900 font-serif"><ImLocation />{location.state.Lo}</p>
                        <p className="text-xl text-slate-900">{location.state.Tg}</p>
                    </div>

                    <div className="flex flex-col justify-center  pt-10 p-4 bg-white">

                        <h1 className="text-2xl font-bold text-slate-700 font-serif">Submit Your Deetail</h1>
                        <div className=" flex md:flex-row flex-col  md:justify-center items-center gap-4 h-fit w-fit text-center my-10">
                            <div className="flex ">
                                <div className="flex flex-col text-xl font-serif box-border h-[10%] w-[100px] text-start ">
                                    <label htmlFor="fullname">Name:</label>
                                    <label htmlFor="email">Email:</label>
                                </div>
                                <div className="  text-xl font-serif flex flex-col items-center gap-1">
                                    <input onChange={(e) => { setFullName(e.target.value) }} required type="text" name="fullname" value={fullName} className="bg-blue-200 rounded" />
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" required name="email" value={email} className="bg-blue-200 rounded" />
                                </div>
                            </div>

                            <div className="flex ">
                                <div className="flex flex-col text-xl font-serif box-border h-[10%] w-[100px] text-start ">
                                    <label htmlFor="phone">Phone :</label>
                                    <label htmlFor="address">Address:</label>
                                </div>
                                <div className="  text-xl font-serif flex flex-col items-center gap-1">
                                    <input onChange={(e) => { setPhone(e.target.value) }} type="text" value={phone} name="phone" required className="bg-blue-200 rounded" />
                                    <input onChange={(e) => { setAdd(e.target.value) }} type="text" value={add} name="address" required className="bg-blue-200 rounded" />
                                </div>
                            </div>

                        </div>

                        <div className=" flex md:flex-row flex-col  md:justify-center items-center gap-4 h-fit w-fit text-center">
                            <div className="flex items-center gap-2 text-xl ">
                                <label className="text-xl font-serif">Cover letter</label>
                                <textarea type="textarea" className="bg-blue-200 rounded md:w-[210px] w-fit" />
                            </div>
                            <div className="flex md:flex-row flex-row md:justify-center items-center gap-2">
                                <label className="text-xl font-serif">CV</label>
                                <input type="file" className="" />
                            </div>

                        </div>

                        <button onClick={handleSubmit} className="p-2 rounded-lg my-10 text-xl font-semibold font-serif border bg-blue-400 w-[150px]">Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyForm;