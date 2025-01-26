import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import AboutMe from "../Components/AboutMe";
// import About from "../Components/About";


const Layout = () => {
    return (
        <div>
           {/* <About></About> */}
           <Navbar></Navbar>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Outlet></Outlet>
        </div>
    );
};

export default Layout;