import React, { useState } from "react";
import FoodItem, { FoodCategoryItem } from "./FoodItem";

const FoodList = ({ data }) => {
  const CategoryItem = FoodCategoryItem(FoodItem);

  const [highpop, sethighpop] = useState(false);

  const handlehighpop = () => {
    if (highpop === true) sethighpop(false);
    else sethighpop(true);
  };

  return (
    <div className="py-2">
      <div className=" bg-gray-200 rounded-xl overflow-hidden">
        <div
          className=" bg-gray-400 py-4 px-8 rounded-xl font-semibold flex justify-between"
          onClick={handlehighpop}
        >
          <spam>{data?.title}</spam>
          <spam>&#11182;</spam>
        </div>
        
        {highpop && (
          <div>
            {data?.categories !== undefined ? (
              <CategoryItem category={data?.categories} />
            ) : (
              <FoodItem itemCard={data?.itemCards} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodList;
