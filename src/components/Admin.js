import SideBar from './sideBar'
import Header from './header_food';
import { useState} from 'react'
import axios from 'axios'

export default function Admin() {
    const [username, setUsername] = useState('')
    const [pword, setPword] = useState('')
    const [pwordConf, setPwordConf] = useState('')

    const handleUsername =(e) => {
        setUsername(e.target.value)
    }
    const handlePword =(e) => {
        setPword(e.target.value)
    }
    const handlePwordConf =(e) => {
        setPwordConf(e.target.value)
    }

    const handleSubmit = (e) =>  {
        e.preventDefault()
        axios.post('http://localhost:5000/signup', {
            username: username,
            pword: pword
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })

    }
    console.log(username, pword, pwordConf)
    return(
        <div className="w-screen h-screen flex flex-row">
            <SideBar></SideBar>
            <div className="px-32 py-11 w-[85%] bg-[#f4f5f8] flex flex-col space-y-8">
                <Header text="Account" genre="Admin"></Header>
                <form className="bg-white rounded-md w-full max-h-[70%] justify-center items-center p-5 flex flex-col space-y-8">
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
                    <input
                    value={pwordConf}
                    onChange={handlePwordConf}
                    type="password"
                    maxLength="30"
                    required
                    pattern={pword}
                    className=" w-[80%] border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                    placeholder="Confirm password"
                    />
                    <input
                    type="submit"
                    onClick={handleSubmit}
                    className="px-5 py-2 transition-colors duration-300 hover:text-white hover:shadow-md hover:bg-[#008e38] cursor-pointer border-[1px] border-[#008e38] rounded-md text-[#008e38] "
                    >
                    </input>
                </form>
            </div>
        </div>
    );
    
}