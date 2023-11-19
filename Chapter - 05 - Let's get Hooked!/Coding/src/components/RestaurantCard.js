import { CDN_URL } from "../utils/constants";

const ReastaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = resData?.data;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span>
        <h6>
          <i class="bi bi-star-fill"></i>
          {avgRating}
        </h6>
        <h6>{lastMileTravelString}</h6>
      </span>
      <h5>{costForTwoString}</h5>
    </div>
  );
};

export default ReastaurantCard;
