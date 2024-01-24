import {useEffect, useState} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios'

export default function Row({food, setVisible, index, setEdit, setId}) {
    const [imageData, setImageData] = useState(null)
    
    const handleDelete = () => {
        setVisible(food.id)
    }

    const handleEdit =() => {
        setEdit(index)
        setId(food.id)
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/api/uploads/${food.picture}`, {
          responseType: 'blob',
        })
        .then((response) => {
          const reader = new FileReader();
          reader.onload = () => {
            setImageData(reader.result);
          };
          reader.readAsDataURL(response.data);
        })
        .catch((error) => {
          console.error('Error fetching image:', error);
        });
      }, [imageData]);
    
    return(
      <div className="flex items-center">
      <div className="py-4 px-3 lg:px-6 xl:px-6 text-left w-1/12">{index + 1}</div>
      <div className="py-4 px-3 lg:px-6 xl:px-6 text-left w-2/12">
        <div className="w-12 h-12 lg:w-24 lg:h-24 xl:w-24 xl:h-24 ">
          <img
            src={imageData}
            alt={food.id}
            className="w-12 h-12 lg:w-full lg:h-full xl:h-full xl:w-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="py-4 px-5 lg:px-6 xl:px-6 text-center w-3/12 font-semibold">{food.name}</div>
      <div className="py-4 px-3 lg:px-6 xl:px-6 text-center w-2/12 font-semibold text-green-500">
        {food.price + " DT"}
      </div>
      <div className="py-4 px-3 flex md:flex lg:flex xl:block lg:px-6 xl:px-6 space-x-2 text-center w-2/12">
        <button onClick={handleEdit} className="text-blue-500 hover:underline">
          <FaEdit size="20" />
        </button>
        <button onClick={handleDelete} className="text-red-500 hover:underline">
          <FaTrash size="20" />
        </button>
      </div>
    </div>
    );
}