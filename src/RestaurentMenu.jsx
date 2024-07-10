import React from "react";
import { useParams } from "react-router-dom";
import { imgCDM } from "./utils/imageURL";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurentMenu";
import FoodList from "./FoodList";

const RestaurentMenu = () => {
  const { resID } = useParams();

  const data = useRestaurantMenu(resID);

  if (data === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines, cloudinaryImageId } =
    data?.cards[2]?.card?.card?.info;

  const alldata = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const Menudata = alldata.filter(
    (e) =>
      e?.card?.card?.[`@type`] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      e?.card?.card?.[`@type`] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  console.log(Menudata);

  return (
    <div className="w-6/12 m-auto">
      <div className="flex p-5 mb-10 mt-6 justify-between rounded-3xl bg-gray-300">
        <div className="my-auto">
          <h2 className="font-medium text-4xl">{name}</h2>
          <p className=" text-lg">Rating - {avgRating}</p>
          <p className="text-xl">{costForTwoMessage}</p>
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className=" w-40 rounded-2xl overflow-hidden">
          <img src={imgCDM + cloudinaryImageId} alt="restaurent"></img>
        </div>
      </div>

      <div>
        {Menudata.map((menu) => (
          <FoodList key={menu?.card?.card?.title} data={menu?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
