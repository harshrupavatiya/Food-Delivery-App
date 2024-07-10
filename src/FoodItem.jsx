import React from "react";
import { imgCDM } from "./utils/imageURL";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ itemCard }) => {
  
  const dispatch = useDispatch();

  const handleAddCart = (it) => {
    dispatch(addItem(it));
  };

  return (
    <div className=" px-5 bg-gray-200 rounded-lg">
      {itemCard.map((i) => (
        <div className="relative flex justify-between  items-center py-3 border-b-2 border-gray-300" key={i?.card?.info?.id}>
          <div className="w-4/5">
            <h4 className="mt-2 text-lg font-semibold">{i?.card?.info?.name} - {i?.card?.info?.price / 100 || i?.card?.info?.defaultPrice / 100}</h4>
            <p className=" pb-2">{i?.card?.info?.description}</p>
          </div>
          <div className=" w-1/5 overflow-hidden rounded-2xl">
            <button className="absolute py-2 px-5 bottom-1 right-7 border-black border rounded-lg backdrop-blur-sm font-bold" onClick={() => handleAddCart(i)}>Add +</button>
            <img src={imgCDM + i?.card?.info?.imageId} alt="Food"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export const FoodCategoryItem = (FoodItem) => {

  return ({ category }) => {

    return (
      <div>
        {category.map((c) => (
          <div>
            <h3 className="bg-gray-300 mt-2 py-2 px-9 rounded-xl border-b-2 border-slate-900">{c?.title}</h3>
            <FoodItem itemCard={c?.itemCards} />
          </div>
        ))}
      </div>
    );
  };
};

export default FoodItem;
