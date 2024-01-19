import Table from "./Table";
import { IoMdAddCircleOutline } from "react-icons/io";
import {useState, useRef, useEffect} from 'react'
import Modal from "./modal";
import axios from 'axios'

export default function Card() {
    const [visible, setVisible] = useState(false)
    const [modal, setModal] = useState("")
    const [food, setFood] = useState([])
    const [edit, setEdit] = useState("")
    const [inputValue, setInputValue] = useState(edit!==""? food[edit].name : "")
    const [image, setImage] = useState(edit!==""? food[edit].picture : "")
    const [price, setPrice] = useState(edit!==""? food[edit].price : "")
    const [id, setId] = useState("")
    const [search, setSearch] = useState("")
    const [filteredFood, setFilteredFood] = useState([])
    const deleteRef = useRef(null)
    const editRef = useRef(null)
    const imageRef = useRef(null)

    

    function imageToFile(imageDataURL, fileName = "image.png", fileType = "image/png") {
        const blob = dataURLtoBlob(imageDataURL);
      
        const file = new File([blob], fileName, { type: fileType });
      
        return file;
      }

      function dataURLtoBlob(dataURL) {
        const arr = dataURL.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
      
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
      
        return new Blob([u8arr], { type: mime });
      }

    useEffect(()=> {
        if(edit !== "") {
            setInputValue(edit!==""? food[edit].name : "")
            setImage(edit!==""? food[edit].picture : "")
            setPrice(edit!==""? food[edit].price : "")
            axios.get(`http://localhost:5000/api/uploads/${food[edit].picture}`, {
              responseType: 'blob',
            })
            .then((response) => {
              const reader = new FileReader();
              reader.onload = () => {
                setImage(reader.result);
              };
              reader.readAsDataURL(response.data);
            })
            .catch((error) => {
              console.error('Error fetching image:', error);
            });

        }
    }, [edit])
    
    const handleFoodChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleDelete =() => {
        setModal("")
        const newArray = food.filter(item => item.id !== modal);
        setFood(newArray);
        axios.post('http://localhost:5000/food_delete', {
            id: modal
        })
        .catch((error) => {
            console.error(error)
        })

    }

    const handleCancel= () => {
        setModal("")
    }

    const handleImageChange =(event) => {
        var reader = new FileReader() 
        if (event.target.files.length > 0) {
          reader.readAsDataURL(event.target.files[0])
          reader.onload = () => {
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

    const handleClick= () => {
        setVisible(true)
    }

    const handleOutsideClick = (event) => {
        if (deleteRef.current && !deleteRef.current.contains(event.target)) {
          setModal("")
        }
        if(editRef.current && !editRef.current.contains(event.target)){
            setEdit("")
        }
      };
      
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);


      const handlePriceChange =(e) => {
        setPrice(e.target.value)
      }

      const handleInsertion =(e) => {
        imageRef.current.click()
        
      }
    const handleSubmit = async(e) => {
            if(image !=="" && food !== "" && price !==""){
              e.preventDefault()
              const formData = new FormData()
              const file = imageToFile(image, "myImage.png")
              formData.append('id', id)
              formData.append('file', file)
              formData.append('name', inputValue)
              formData.append('price', price)
              for (const entry of formData.entries()) {
                  console.log(entry[0], entry[1]);
                }
                
                try {
                    const response = await axios.post('http://localhost:5000/update', formData)
                    console.log(response.data.filename)
                    setFood((prevValue) => [...prevValue, {id:id, name:inputValue, price:price, picture:response.data.filename}])
                    setPrice('')
                    setInputValue('')
                    setEdit('')
                    setId('')
                    window.location.reload()
              }
              catch(err) {
                  console.log("Error : ", err)
              }
            }
          }

          const handleSearch = (e) => {
            const searchTerm = e.target.value.toLowerCase();
            setSearch(searchTerm);
            const filteredItems = food.filter(item =>
                item.name.toLowerCase().includes(searchTerm)
              );
              setFilteredFood(filteredItems);
          }


    return(
        <div className="bg-white rounded-md w-full max-h-[80%] md:max-h-[70%] lg:max-h-[70%] xl:max-h-[70%] p-5 flex flex-col">
            <div className="text-lg text-center font-bold mb-5">Food List</div>
            <input
                onChange={handleSearch}
                value={search}
                type="search"
                placeholder="Search..."
                className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:border-[#008e38] transition-colors duration-300"
                />
            <Table setId={setId} setVisible= {setModal} food ={filteredFood.length >0? filteredFood: food} setFood={setFood} setEdit={setEdit}></Table>
            <div 
                onClick={handleClick}
                className="mt-auto flex space-x-2 flex-row px-5 py-2 justify-center items-center self-center text-center transition-colors duration-300 hover:text-white hover:shadow-md hover:bg-[#008e38] cursor-pointer border-[1px] border-[#008e38] rounded-md text-[#008e38] "
                >
                    <IoMdAddCircleOutline size="23" ></IoMdAddCircleOutline>
                    <p> Add food</p>
            </div>
            {
                visible?
                <Modal setVisible= {setVisible}></Modal>
                :
                null
            }
            {   
                modal!=="" && modal!==null?
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center">
                <div ref={deleteRef} className={`bg-white w-[95%] md:w-[55%] lg:w-[50%] xl:w-[30%] h-[25%] flex flex-col items-center rounded-md `} >
                    <div className=" flex-grow flex space-y-6 flex-col items-center justify-center h-[92%] w-[100%]">
                        <div className="text-lg font-bold"> Are you sure you want to delete this element ? </div>
                        <div> this item will be deleted immediately. You can't undo this action.</div>
                        <div className=" flex flex-row space-x-6">
                            <div 
                                onClick={handleCancel}
                                className="px-5 py-2 transition-colors duration-300  hover:shadow-md cursor-pointer border-[1px] border-black rounded-md text-black "
                                >
                                    Cancel
                            </div>
                            <div 
                                onClick={handleDelete}
                                className="px-5 py-2 transition-colors duration-300  hover:shadow-md bg-[#ff3e1d] cursor-pointer border-[1px] border-[#ff3e1d] rounded-md text-white "
                                >
                                    Delete
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                :
                null
            }
            {
                edit!=="" && edit!==null?
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[1px] flex justify-center items-center">
                    <div ref={editRef} className={`bg-[#303030] w-[90%] md:w-[50%] lg:w-[35%] xl:w-[35%] h-[80%] flex flex-col items-center rounded-md `} >
                    <div className={`flex items-center h-[8%] justify-center bg-black bg-opacity-30 w-full px-3 rounded-t-md`}>
                        <div className="flex-grow text-center">
                            <span className="text-white text-lg">Add Food</span>
                        </div>
                    </div>
                        <form className=" flex-grow flex space-y-6 flex-col items-center mt-14 h-[92%] w-[100%]">
                            <input
                                value={inputValue}
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
                                        onClick={handleInsertion}
                                        className=" text-center w-36 px-5 py-2 transition-colors duration-300 border-[1px] broder-[#008e38] text-[#008e38] hover:shadow-md bg-white cursor-pointer rounded-md  "
                                        >
                                            Insert image
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
    
}