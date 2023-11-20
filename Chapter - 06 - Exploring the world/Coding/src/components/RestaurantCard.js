const ReastaurantCard = ({
  foodName,
  foodImage,
  foodDelivaryTime,
  foodCost,
}) => {
  return (
    <div className="card">
      <img src={foodImage} alt={foodName} />
      <h5>{foodName}</h5>
      <h4>{foodDelivaryTime}</h4>
      <h5>{foodCost}</h5>
    </div>
  );
};

export default ReastaurantCard;
