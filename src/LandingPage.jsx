import { useEffect, useState } from 'react';
import LandingPic from './assessts/LandingPic.jpg';
import { ImLocation } from 'react-icons/im';
import { HiHomeModern } from 'react-icons/hi2';
import ApplyForm from './ApplyForm';
import { useNavigate } from 'react-router-dom';


const URL = 'https://www.arbeitnow.com/api/job-board-api'

function LandingPage() {
    const [searchJob, setSearchJob] = useState("");
    const [job, setJob] = useState([])

    const navigate = useNavigate()



    useEffect(() => {
        seeJob("Java developer")

    }, [])

    const seeJob = async () => {
        try {
            const response = await fetch(`${URL}`);
            const data = await response.json();

            console.log(data);
            setJob(data.data);

        } catch (error) {
            console.error(error);
        }
    };


    // for handle search input 
    const handleSeachInput = (event) => {

        if (event.key === "Enter") {
            seeJob(searchJob);
        }
    };


    return (
        <>
            <div className='bg-blue-200 h-screen w-full'>
                <div className='flex md:flex-row flex-col justify-center my-[100px] '>
                    <div className='md:w-[700px] w-fit'>
                        <img src={LandingPic} />
                    </div>
                    <div className='flex flex-col items-center md:justify-center gap-7 bg-white p-2'>
                        <h1 className='text-slate-600 text-xl text-center'>what programming language you are looking for a job in.</h1>
                        <label className='text-5xl font-bold text-slate-800'>Search Job&#128269;</label>
                        <input value={searchJob} onChange={(e) => setSearchJob(e.target.value)} onKeyDown={handleSeachInput} type='search' className='md:w-[400px] p-4 bg-blue-200 rounded' placeholder='Search perfect job' />
                        <button onSubmit={(e) => { e.preventDefault(); }} className='bg-blue-700 p-2 md:text-xl font-bold text-white rounded'>Search</button>
                    </div>
                </div>
                <h1 className='text-5xl font-bold text-slate-700 flex justify-center'>Recommended Jobs....</h1>
            </div>




            <div>

                {



                    job && job.length > 0 ? (
                        job.map((curr) => {

                            // sending data form this file to  ApplyForm
                            const ti = curr.title;
                            const Com = curr.company_name;
                            const Lo = curr.location;
                            const Tg = curr.tags;

                            return (
                                <>
                                    <div key={curr.id} className='bg-blue-400  container mx-auto '>
                                        <div className='flex md:flex-row flex-col justify-between items-center rounded md:p-7 p-2 border-[8px] border-b-blue-400 my-10'>
                                            <div className='flex justify-between gap-6'>
                                                <h1 className='text-xl text-white font-serif flex flex-col justify-center'>{curr.title}</h1>
                                            </div>

                                            <div>
                                                <h1 className='flex flex-col items-center font-serif'><HiHomeModern size={30} className='text-white' />{curr.company_name}</h1>
                                                <h1 className='text-xl font-serif flex flex-col items-center' ><ImLocation className='text-white' size={30} />{curr.location}</h1>
                                            </div>

                                            <button className='p-2 md:w-[80px] w-[100px] text-center h-fit text-teal-900 font-bold bg-white rounded' onClick={() => navigate('/applyform', { state: { ti: ti, Com: Com, Lo: Lo, Tg: Tg } })}>Apply</button>

                                        </div>
                                    </div>


                                </>
                            )

                        })
                    ) : (
                        <p>No job data available</p>
                    )
                }



            </div>
        </>
    )

}
export default LandingPage;