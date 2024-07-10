// import './Body.css';
import { useState, useEffect } from "react";
// import parentTempData from "../src/utils/mockData";
import RestroCard from './RestroCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {

    const [dataobj, setdataobj] = useState(null);
    const [showObj, setshowObj] = useState(null);
    console.log(showObj);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
        );
    
        let jsonn = await data.json();
        jsonn = jsonn.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    
        console.log(jsonn);
        setshowObj(jsonn);
        setdataobj(jsonn);
    };
    
    return showObj === null ? (
        <Shimmer />
    ) : (
        <div className="Body">

            {/* Search & filter buttons */}
            <div className="w-full px-24 flex mt-3">

                {/* Restaurant Search Bar */}
                <div className="w-4/12">
                    <input type="text" id="searchbar" className="w-9/12 h-full py-2 rounded-l-full text-base pl-3 border-gray-200 border-2" placeholder="Enter restro name.."/>
                    <button className="w-3/12 h-full rounded-r-full bg-gray-200 border-gray-200 border-2" onClick={ () => {
                        let word = document.getElementById("searchbar").value;
                        let searchedRestro = dataobj.filter(obj => obj.info.name.toLowerCase().includes(word.toLowerCase()));
                        setshowObj(searchedRestro);
                    }}>Search</button>
                </div>
                
                {/* Top Rated Restaurant button */}
                <button className="bg-gray-200 rounded-full px-6 ml-6" onClick={ () => {
                    let topRatedRestro = dataobj.filter(obj => obj.info.avgRating >= 4.5);
                    setshowObj(topRatedRestro);
                }}>Top Rated</button>

                {/* All Restaurant button */}
                <button className="bg-gray-200 rounded-full px-6 ml-6" onClick={ () => {
                    setshowObj(dataobj);
                }}>All Restaurant</button>

            </div>

            {/* restaurent cards */}
            <div className="w-full flex overflow-hidden flex-wrap justify-evenly">
                {showObj.map((restro) => (<Link className="reset" key = {restro.info.id} to={"/restaurent/" + restro.info.id}><RestroCard props = {restro.info}/></Link>))}
            </div>
        </div>
    )
}

export default Body;