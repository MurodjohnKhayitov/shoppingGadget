import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../components/Athuntification\'/SignIn/SignIn'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'

function RouterMain() {
    return (
        <>
            <Navbar />
            <Routes  >
                <Route path="/login" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />

            </Routes>
        </>
    )
}

export default RouterMain
