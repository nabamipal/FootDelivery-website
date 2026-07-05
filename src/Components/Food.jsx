import { useState } from "react";
import { data } from "../Data/data";
function Food() {
  const [food, setFood] = useState(data);

  const filterType = (category) => {
    setFood (
        data.filter((item)=>{
            return item.category === category;
        })
    );
  };
  const filterPrice = (price) => {
    setFood (
        data.filter((item)=>{
            return item.price === price;
        })
    );
  };

  return (
        <div className="max-w-[1520px] mx-auto p-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">
                Top Rate Menu Items
            </h1>
            {/* Filter row */}
            <div className="flex flex-col lg:flex-row justify-between">
                                {/* Filter type */}
                            <div>
                                    <p className="font-bold text-gray-700">Filter type</p>
                                    <div className="flex justify-between flex-wrap">
                                        <button onClick={()=>setFood(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                        All
                                        </button>
                                        <button onClick={()=> filterType("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                        Burger
                                        </button>
                                        <button onClick={()=> filterType("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                        Pizza
                                        </button>
                                        <button onClick={()=> filterType("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                        Salad
                                        </button>
                                        <button onClick={()=> filterType("chicken")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                        Chicken
                                        </button>
                                    </div>
                            </div>
                                    {/* Filter price */}

                        <div>
                            <p className="font-bold text-gray-700">Filter price</p>
                            <div className="flex justify-between flex-wrap ">
                                <button onClick={()=> filterPrice('$')}  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                $
                                </button>
                                <button onClick={()=> filterPrice('$$')}  className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                $$
                                </button>
                                <button onClick={()=> filterPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                $$$
                                </button>
                                <button onClick={()=> filterPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                                $$$$
                                </button>
                                
                            </div>
                        </div>
                </div>
                {/* Display food */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                    {food.map((item,index)=>(
                        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                            <img src={item.image} alt={item.name}
                            className="w-full h-[200px] object-cover" />
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{item.name}</p>
                                <span className="bg-orange-600 text-white rounded-full p-1">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
    </div>
  );
}

export default Food;
