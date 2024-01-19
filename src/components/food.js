import {useEffect, useState} from 'react'
import axios from 'axios'



export default function Food({food}) {
    const [imageData, setImageData] = useState()

    useEffect(() => {
        // Fetch the image data from the API endpoint
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
      }, []);

      return (
        <div className="flex flex-col space-y-4">
                <img src={imageData} alt="food" className="rounded-md cursor-pointer max-w-full h-80 object-cover"></img>
                <span className="title text-[#da2322] cursor-pointer text-xl md:text-3xl xl:text-3xl">{food.name}</span>
                <span className="text-[#6ee32b] cursor-pointer text-md md:text-xl xl:text-xl ">{food.price} DT</span>
        </div>
      )

}