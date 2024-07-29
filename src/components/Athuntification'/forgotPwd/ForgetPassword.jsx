import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import '../../firebase/config'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { Button, Modal } from 'antd';

const ForgetPassword = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        sendPasswordResetEmail(getAuth(), email)
            .then((res) => {
                console.log(res, "res");
                setIsModalOpen(true)
            })
            .catch(err => {
                console.log(err, "err");
            })
    }


    return (
        <div className='w-full h-[calc(100vh-72px)] flex items-center justify-center border'>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

            <section className='min-w-[550px] border border-[#a1a1a1] rounded-lg flex flex-col justify-center items-center p-4'>
                <h1 className='font-bold'>Forget Password</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4  '>
                    <label htmlFor="Email">Email:</label>
                    <input
                        className=" w-full h-12  border border-searchBgColor rounded-lg px-4"
                        type="email"
                        id="Email"
                        autoComplete="on"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder='email'
                    />

                    <button className="mt-2 text-white border cursor-pointer flex items-center justify-center border-[#F2F2F2] w-full h-12 bg-[#0077B6] select-none rounded-lg active:scale-95	active:opacity-70 "
                    >Send</button>
                </form>
                <p className='w-full mt-5 flex items-center justify-center'>
                    Hava a an Account?
                    <span className="line ml-5">
                        <Link to="/login" className='text-[#0077B6]'>Sign In</Link>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default ForgetPassword
