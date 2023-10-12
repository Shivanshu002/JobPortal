import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>

            <div className="flex justify-between p-5 my-4 bg-blue-700 ">
                <div className="text-3xl text-white font-bold font-serif">
                    <h1>Job Portal</h1>
                </div>
                <div>
                    <ul className="flex justify-between gap-10 text-xl text-white font-serif ">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/home">Search Job</Link></li>
                        {/* <li><Link to="/">Apply Jobs</Link></li> */}
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Navbar;