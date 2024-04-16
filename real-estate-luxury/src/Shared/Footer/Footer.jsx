import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="w-full min-h-[400px] footer_bg text-white mt-5">
            <div className="flex  md:flex-row lg:flex-row justify-center items-center  min-h-[400px] gap-5 lg:gap-52">

                <div className=" w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                    <div className=" px-7 py-3">
                        <h1 className="text-xl font-bold text-black mb-2">Properties</h1>
                        <p className="text-[#878588]">Commercial</p>
                        <p className="text-[#878588]">Residential</p>
                        <p className="text-[#878588]">Luxury</p>
                    </div>
                    <div className="border-l-2 border-[#3330336d] px-7 py-3">
                        <h1 className="text-xl font-bold mb-2 text-black">Company</h1>
                        <p className="text-[#878588]">About us</p>
                        <p className="text-[#878588]">Services</p>
                        <p className="text-[#878588]">Presentation</p>
                        <p className="text-[#878588]">Clients</p>
                    </div>
                    <div className="border-l-2 border-[#3330336d] px-7 py-3">
                        <h1 className="text-xl font-bold mb-2 text-black">Clients</h1>
                        <Link to="/signup" className="block text-[#878588]">
                            Sign Up
                        </Link>
                        <Link to="/signin" className="block text-[#878588]">
                            Sign In
                        </Link>
                        <p className="text-[#878588]">Promotions</p>
                    </div>

                </div>
                <div className="flex gap-4 lg:flex-row md:flex-row flex-col">
                    <FaLinkedin className="w-8 h-8  cursor-pointer" />
                    <FaSquareXTwitter className="w-8 h-8   cursor-pointer" />
                    <FaFacebook className="w-8 h-8   cursor-pointer" />
                    <FaGithub className="w-8 h-8   cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};


export default Footer;