import { useEffect } from "react";

const useRestaurent = () => {

    let jsonn;

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
        );
    
        jsonn = await data.json();
        jsonn = jsonn.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    };

    return jsonn;
}

export default useRestaurent;