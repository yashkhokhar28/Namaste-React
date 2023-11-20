import { food_api_URL } from "../utils/constants";
import ReastaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(food_api_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      const resData = await checkJsonData(json);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Error fetching data. Please try again.");
      setLoading(false);
    }
  }

  const checkJsonData = (jsonData) => {
    return jsonData;
  };
  if (loading) return <Shimmer />;

  return (
    <>
      <div className="body">
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            <h4>{"Total Restaurant : " + filteredRestaurants.length}</h4>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search a restaurant you want..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              ></input>
              <button
                className="search-btn"
                onClick={() => {
                  const resFilterData = allRestaurants.filter((restaurant) =>
                    restaurant?.foodName
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(resFilterData);
                }}
              >
                Search
              </button>
            </div>
            <div className="filter-btn">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  //filter by price
                  const filtterReastaurant = allRestaurants.filter(
                    (res) => res.foodCost > 500
                  );
                  setAllRestaurants(filtterReastaurant);
                }}
              >
                Fillter By Price
              </button>
              {errorMessage && (
                <div className="error-container">{errorMessage}</div>
              )}
            </div>
            <div className="restaurant-list">
              {filteredRestaurants.map((restaurant) => {
                return <ReastaurantCard key={restaurant?.id} {...restaurant} />;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Body;
