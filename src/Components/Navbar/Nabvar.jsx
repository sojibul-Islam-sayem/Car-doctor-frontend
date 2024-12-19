import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../provider/AuthProviders';



const Nabvar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {console.log('out');
             })
            .then(error => console.log(error)
            )
    }






    const navItem = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        {
            user?.email?<>
            <li><Link to='/bookings'>Bookings</Link></li>
            <li><button onClick={handleLogOut}>Logout</button></li>
            </>: <li><Link to='/login'>Log In</Link></li>
        }
        <li><Link>Contact</Link></li>
    </>

    return (
        <div>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex space-x-9">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="border px-3 py-2 rounded text-[#FF3811] border-[#FF3811]">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Nabvar;