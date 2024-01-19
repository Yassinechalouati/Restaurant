import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [username, setUsername] = useState("")
    const [pword, setPword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleUsername =(e) => {
        setUsername(e.target.value)
    }
    const handlePword =(e) => {
        setPword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        axios.post('http://localhost:5000/signin', {
            username: username,
            pword: pword
        })
        .then((response) => {
            if(response.data.message=="Wrong credentials or the User was deactivated !"){
                setError(response.data.message)
            }
            else {
                navigate('/Food')
            }
        })
    }
    return(
        <div className="bg-[#f4f5f8] h-screen w-screen flex justify-center items-center ">
            <form className="bg-white rounded-md w-[90%] xl:w-[30%] md:w-[50%] h-[80%] md:h-[40%] xl:h-[40%] justify-center items-center p-5 flex flex-col space-y-8">
            <span className="text-center text-lg font-bold">Welcome to the Admin panel! 👋<br></br> <p className="text-gray-400 text-md">Please sign-in to your account</p></span>
            <input
                    value={username}
                    onChange={handleUsername}
                    type="text"
                    maxLength="30"
                    required
                    className=" w-[80%] border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                    placeholder="Enter username"
                    />

                    <input
                    value={pword}
                    onChange={handlePword}
                    type="password"
                    maxLength="30"
                    required
                    className=" w-[80%] border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                    placeholder="Enter password"
                    />
                    <span className={`text-sm text-center font-bold text-[#ff3e1d] ${error == "Wrong credentials or the User was deactivated !" ? "": "hidden"}`}>{error}</span>
                    <input
                    type="submit"
                    value="Sign in"
                    onClick={handleSubmit}
                    className="px-5 py-2 transition-colors duration-300 hover:text-white hover:shadow-md hover:bg-[#008e38] cursor-pointer border-[1px] border-[#008e38] rounded-md text-[#008e38] "
                    >
                    </input>
            </form>
        </div>
    );
}