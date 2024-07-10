// import './RestroCard.css';
import { imgCDM } from './utils/imageURL';

const RestroCard = ({props}) => {
  return (
    <div className=" w-[22rem] p-4 bg-gray-200 rounded-xl my-3">

      <div className="restro-img h-48 overflow-hidden rounded-lg">
        <img className="object-cover w-full h-full" src={imgCDM + props.cloudinaryImageId} alt="restaurant"/>
      </div>
    
      <div className=" mt-3 flex justify-between">
        <h3 className="w-4/5 h-6 overflow-hidden font-medium text-lg">{props.name}</h3>
        <p className="">{props.avgRating} <span className="fa fa-star"></span></p>
      </div>
    
      <div className="flex justify-between">
        <p className="w-[65%] h-12 overflow-hidden">{props.cuisines.join(", ")}</p>
        <p className="w-[28%]">{props.costForTwo}</p>
      </div>
    </div>
  )
}

export default RestroCard;