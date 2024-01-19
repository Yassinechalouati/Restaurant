// src/Menu.js
import { Icon } from '@iconify/react';
import pepperHot from '@iconify/icons-fa6-solid/pepper-hot';
import axios from 'axios'
import {useState, useEffect} from 'react'  
import Food from './food'


function Menu() {
    const [food, setFood] = useState([])

    useEffect(() => {
        axios.post('http://localhost:5000/food_fetch', )
            .then((response) => {
                setFood(response.data.message)
            })
    },[])
    return (
        <div className="w-screen h-screen overflow-y-auto overflow-x-hidden ">
            <div className="w-screen h-screen relative flex justify-center items-center bg-black shadow-md">
                <img src="bg.png" alt="background" className="absolute w-full h-full object-cover"></img>
                <div className="absolute right-[17%] flex flex-col space-y-4 ">
                    <span className="text-xl md:text-xl xl:text-xl text-white ">Chili's Tunisie</span> 
                    <div className="flex flex-col space-y-2">
                        <span className="title text-xl md:text-4xl xl:text-5xl text-[#6ee32b]">Découvrez  syriennes</span>
                        <span className="title text-xl md:text-4xl xl:text-5xl text-[#6ee32b]">les  meilleures recettes </span>
                        <span className="title text-xl md:text-4xl xl:text-5xl text-[#6ee32b]">syriennes </span>
                    </div>
                    <a href="#food" className="bg-[#da2322] text-white text-md md:text-xl xl:text-xl cursor-pointer w-[80%] xl:w-[40%] p-4 flex items-center justify-center font-bold rounded-2xl ">Voir notre menu</a>
                </div>
            </div>
            <div id="food" className="mt-20 w-screen justify-center items-center flex space-x-5 ">
                <Icon icon={pepperHot} color="#da2322" className="w-4 h-4 md:w-8 md:h-8 xl:w-8 xl:h-8"/>
                <span className="title text-[#da2322] text-2xl md:text-4xl xl:text-5xl " >Notre Menu</span>
                <Icon icon={pepperHot} flip="horizontal" color="#da2322" className="w-4 h-4 md:w-8 md:h-8 xl:w-8 xl:h-8 " />
            </div>

            <hr className="border-t-2 border-[#da2322] mt-5 mx-[16%] md:mx-[30%] xl:mx-[30%]"></hr>

           
                <div className="grid px-4 md:px-20 xl:px-20 mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                    {food.map(((food, index) => {
                        return <Food
                        key={index} 
                        food={food}></Food>
                    }))}
                </div>
           
                <form className="px-4 md:px-20 xl:px-20 mb-20 flex justify-center mt-8 w-full h-[60%] ">
                    <div className="bg-[#b61b1b] rounded-3xl w-[100%] h-full flex flex-col pt-5 md:space-y-10 xl:space-y-10">
                        <span className="title h-[10%] text-2xl md:text-4xl xl:text-5xl text-white self-center">Prendre Contact</span>
                        <div className="w-full h-[90%] items-center flex justify-between px-2 md:px-10 xl:px-52 ">
                            <div className="flex flex-col space-y-2 ">
                                <input
                                    type="text"
                                    maxLength="30"
                                    required
                                    className="w-full border text-sm md:text-xl xl:text-xl border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                                    placeholder="Nom et Prénom"
                                />
                                <input
                                    type="email"
                                    maxLength="30"
                                    required
                                    className=" w-full border text-sm md:text-xl xl:text-xl border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                                    placeholder="Adresse Email"
                                />
                                <textarea
                                    type="text"
                                    maxLength="30"
                                    required
                                    className=" w-full border text-sm md:text-xl xl:text-xl border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                                    placeholder="Votre message ici..."
                                />
                                <button href="#food" className="bg-[#6ee32b] text-white text-xl md:text-xl xl:text-xl cursor-pointer w-full p-4 flex items-center justify-center font-bold rounded-md ">Envoyer</button>
                            </div>
                            <div className="flex justify-center">
                                <img src="chillis.png" alt="chillis" className="w-36 md:w-full xl:w-full  md:max-h-[80%] xl:max-h-[80%] object-contain rounded-md" />
                            </div>
                        </div>
                    </div>
            </form>    
        </div>
    );
}

export default Menu;