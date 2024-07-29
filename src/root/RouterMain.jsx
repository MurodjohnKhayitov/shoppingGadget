import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../components/Athuntification\'/SignIn/SignIn'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import SignUp from '../components/Athuntification\'/SignUp/SignUp'
import ForgetPassword from '../components/Athuntification\'/forgotPwd/ForgetPassword'

function RouterMain() {
    return (
        <>
            <Navbar />
            <Routes  >
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />

            </Routes>
        </>
    )
}

export default RouterMain
