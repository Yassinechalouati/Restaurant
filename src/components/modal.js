import {useEffect, useRef, useState} from 'react'
import axios from 'axios'

export default function Modal({setVisible}) {
    const addRef = useRef(null)
    const imageRef = useRef(null)
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    const [food, setFood] = useState("")
    const [price, setPrice] = useState('')
    

    const handleOutsideClick = (event) => {
        if (addRef.current && !addRef.current.contains(event.target)) {
          setVisible(false)
        }
      };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    const handleClick = () => {
        imageRef.current.click()
        
    }

    const handleImageChange = (event) => {
        setFile(event.target.files[0])
        var reader = new FileReader() 
        if (event.target.files.length > 0) {
          reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setImage(reader.result)
        }
        reader.onerror = error => {
          console.log("Error", error)
        }
        }
        else {
          setImage("")
        }
        
      }
    const handleSubmit = async(e) => {
      if(image !=="" && food !== "" && price !==""){
        e.preventDefault()
        if (!file) return
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', food)
        formData.append('price', price)
        for (const entry of formData.entries()) {
            console.log(entry[0], entry[1]);
          }

        try {
            const response = await axios.post('http://localhost:5000/upload', formData)
            console.log(response)

            setPrice('')
            setFood('')
            setImage('')
        }
        catch(err) {
            console.error("Error uploading video: ", err)
        }
      }
    }
    const handlePriceChange= (e) => {
        setPrice(e.target.value)
    }
    const handleFoodChange = (e) => {
        setFood(e.target.value)
    }

    console.log(price, food)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center">
        <div ref={addRef} className={`bg-[#303030] w-[35%] h-[80%] flex flex-col items-center rounded-md `} >
        <div className={`flex items-center h-[8%] justify-center bg-black bg-opacity-30 w-full px-3 rounded-t-md`}>
            <div className="flex-grow text-center">
                <span className="text-white text-lg">Add Food</span>
            </div>
        </div>
            <form className=" flex-grow flex space-y-6 flex-col items-center mt-14 h-[92%] w-[100%]">
                <input
                    value={food}
                    onChange={handleFoodChange}
                    type="text"
                    maxLength="30"
                    required
                    className=" w-[80%] border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                    placeholder="Enter food name..."
                    />
                <input
                        value={price}
                        onChange={handlePriceChange}
                        type="number"
                        min="0"
                        required
                        className=" w-[80%] border border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-2 rounded-md transition-all duration-300"
                        placeholder="Enter price..."
                    />

                <input className="hidden" required accept="image/*" size="5000000" onChange={handleImageChange} ref={imageRef} type="file" ></input>
                <img src={image} alt="food" className={`bg-cover h-[45%] w-[80%] rounded-md ${image!=="" && image!==null? "": "hidden"}`}></img>
                <div className={`${image!=="" && image!=null? "" :"pt-20"} flex flex-row space-x-4`}>
                        <input
                            onClick={handleSubmit}
                            type="submit"
                            className="w-36 px-5 py-2 transition-colors duration-300 text-white hover:shadow-md bg-[#008e38] cursor-pointer rounded-md  "
                            >
                        </input>
                        <div 
                            onClick={handleClick}
                            className=" text-center w-36 px-5 py-2 transition-colors duration-300 border-[1px] broder-[#008e38] text-[#008e38] hover:shadow-md bg-white cursor-pointer rounded-md  "
                            >
                                Insert image
                        </div>
                </div>
            </form>
        </div>
    </div>
  )
}