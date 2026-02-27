import React from 'react'
import Navbar from '../Components/Navbar'
import { temples } from '../Utils/Data'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
       <Navbar />
        <div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 md:gap-20 mt-10 ">
            {temples.map((item) => (
              <div key={item.id} className="space-y-5 ">
                <Link to={item.link}>
                  <img src={item.img} alt={item.alt} className="w-56 object-cover rounded-xl border-4 border-gray-200"></img>
                  <h3 className="flex justify-center items-center text-lg font-bold mt-2">
                    {item.text}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          <hr className=' w-10'/>
        </div>
    
    </>
  )
}

export default Home