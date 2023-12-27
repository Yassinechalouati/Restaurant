
import axios from 'axios'
import {useState, useEffect} from 'react'
import Row from './Food_row'

export default function Table({setVisible, food, setFood, setEdit, setId}) {
  
  

  useEffect(() => {
    axios.post('http://localhost:5000/food_fetch', )
      .then((response) => {
        setFood(response.data.message)
       
      })
      .catch((error) => {
        console.error(error)
      })
  })
    return (
      <div className="max-h-[70%]">
      <div className="flex bg-gray-50 font-bold">
        <div className="py-3 px-6 text-left w-1/12">ID</div>
        <div className="py-3 px-6 text-left w-2/12">Image</div>
        <div className="py-3 px-6 text-center w-3/12">Food Name</div>
        <div className="py-3 px-6 text-center w-2/12">Price</div>
        <div className="py-3 px-6 text-center w-2/12">Actions</div>
      </div>
      <div className="overflow-y-auto max-h-[100%]">
        <div className="bg-white divide-y divide-gray-200">
          {food.map((item, index) => (
            <Row
              key={item.id}
              setId={setId}
              food={item}
              setVisible={setVisible}
              index={index}
              setEdit={setEdit}
            />
          ))}
        </div>
      </div>
    </div>

    );
  }
  
  