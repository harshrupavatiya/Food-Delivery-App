import { useState ,useEffect } from "react";
import { Menu_Api } from "./imageURL";

const useRestaurantMenu = (resID) => {
  const [RestroInfo, setRestroInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(Menu_Api + resID);
    const menujson = await response.json();

    // setRestroInfo(menujson?.data?.cards[2]?.card?.card?.info);
    // setMenudata(
    //   menujson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
    //     ?.card?.card?.itemCards
    // );

    setRestroInfo(menujson.data);
  };

  return RestroInfo;
};

export default useRestaurantMenu;