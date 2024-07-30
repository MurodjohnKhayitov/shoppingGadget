import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import '../../firebase/config'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((res) => {
                setAuth(res);
                setEmail('')
                setPassword('')
                navigate('/home')
                toast.success(`Success SignUp!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(() => {
                toast.error(`Something Wrong!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    return (
        <div className='w-full h-[calc(100vh-72px)] flex items-center justify-center border px-4 sm:px-0'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={4}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <section className='max-w-[440px] w-full sm:min-w-[550px] border border-[#a1a1a1] rounded-lg flex flex-col justify-center items-center p-4'>
                <h1 className='font-bold'>Ro'yhatdan o'tish</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4  '>
                    <label htmlFor="Email">Email:</label>
                    <input
                        className=" w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4"
                        type="email"
                        id="Email"
                        autoComplete="on"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder='email'
                    />

                    <label htmlFor="password">Parol:</label>
                    <input
                        className="  w-full h-10 sm:h-12  border border-searchBgColor rounded-lg px-4"

                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        placeholder='password'

                    />
                    <button className="mt-2 text-white border cursor-pointer flex items-center justify-center border-[#F2F2F2] w-full h-10 sm:h-12 bg-[#0077B6] select-none rounded-lg active:scale-95	active:opacity-70 "
                    >Ro'yhatdan o'tish</button>
                </form>
                <p className='w-full mt-5 flex items-center justify-between'>
                    <span className="line  text-[14px]">
                        Oldin ro'yhatdan o'tgansizmi ?
                        <Link to="/signup" className='text-[#0077B6] text-[14px] ml-5'>Kirish</Link>
                    </span>
                    <span className="line ml-5">

                        <Link to="/forget-password" className='text-[#0077B6] text-[14px]'>Parolni unutdingizmi</Link>
                    </span>
                </p>

            </section>
        </div>
    )
}

export default SignUp
