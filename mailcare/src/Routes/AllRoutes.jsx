import { Route, Routes } from "react-router-dom"
import LogIn from "./LogIn"
import SignUp from "./SIgnUp"
import Home from "../components/Home/Home"
export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/log-in" element={<LogIn/>}/>
        </Routes>
    )
}