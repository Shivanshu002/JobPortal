import { useLocation, useNavigate } from "react-router-dom";
import { HiHomeModern } from 'react-icons/hi2';
import { ImLocation } from 'react-icons/im';



function ApplyForm() {
    const navigate = useNavigate();
    const location = useLocation();



    function OnsubmitApply(e) {
        e.preventDefault();
        navigate('/success')
    }

    return (
        <>
            <div className="my-[50px] container mx-auto flex justify-center">

                <div className=" flex md:flex-row flex-col justify-center bg-blue-400 rounded-2xl md:p-5 p-0">


                    <div className="flex flex-col justify-center md:p-4 md:gap-7 bg-white">
                        <h1 className="text-2xl text-slate-900 font-semibold font-serif">{location.state.ti}</h1>
                        <h1 className="text-xl text-slate-900 font-serif"><HiHomeModern size={20} />{location.state.Com}</h1>
                        <p className="text-xl text-slate-900 font-serif"><ImLocation />{location.state.Lo}</p>
                        <p className="text-xl text-slate-900">{location.state.Tg}</p>
                    </div>

                    <div className="flex flex-col justify-center  pt-10 p-2 bg-white">

                        <h1 className="text-2xl font-bold text-slate-700 font-serif">Submit Your Deetail</h1>
                        <div className=" flex md:flex-row flex-col  md:justify-center items-center gap-10 h-fit w-fit text-center my-10">
                            <div className="flex flex-col gap-5">
                                <div className="text-xl font-serif ">
                                    <label>Name:</label>
                                    <input className="bg-blue-200 rounded" type="text" />
                                </div>
                                <div className="text-xl font-serif flex justify-center gap-1">
                                    <label>Email:</label>
                                    <input type="text" className="bg-blue-200 rounded" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="text-xl font-serif flex justify-center gap-2">
                                    <label>Phone:</label>
                                    <input type="text" className="bg-blue-200 rounded" />
                                </div>
                                <div className="text-xl font-serif flex gap-1 justify-center">
                                    <label>Address:</label>
                                    <input type="text" className="bg-blue-200 rounded" />
                                </div>
                            </div>

                        </div>
                        <div className="flex md:flex-row flex-col gap-2 md:justify-between  items-center" >
                            <div className="flex items-center gap-2 text-xl">
                                <label className="text-xl font-serif">Cover letter</label>
                                <textarea type="textarea" className="bg-blue-200 rounded w-[170px]" />
                            </div>
                            <div className="flex md:flex-row flex-row md:justify-center items-center gap-2">
                                <label className="text-xl font-serif">CV</label>
                                <input type="file" />
                            </div>
                        </div>

                        <button onSubmit={OnsubmitApply} className="p-2 rounded-lg my-10 text-xl font-semibold font-serif border bg-blue-400 w-[150px]">Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyForm;