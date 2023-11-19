import restaurantList from "../utils/mockData";
import ReastaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);
  const [searchData, setSearchData] = useState("");

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="btn btn-outline-success"
          onClick={() => {
            const fillteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(fillteredList);
          }}
        >
          Top Reastaurant
        </button>
        <div className="search-box col-md-3">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            onClick={() => {
              // filter the data
              const filterData = listOfRestaurant.filter((restaurant) =>
                restaurant?.data?.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase())
              );
              // update the state of restaurants list
              setlistOfRestaurant(filterData);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {listOfRestaurant.map((restaurant) => (
          <ReastaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
