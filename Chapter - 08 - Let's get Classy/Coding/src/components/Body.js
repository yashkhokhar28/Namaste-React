import { food_api_URL, swiggy_api_URL } from "../utils/constants";
import ReastaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      const response = await fetch(swiggy_api_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
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

  if (loading) return <Shimmer />;

  return (
    <>
      <div className="body">
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <>
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
                    restaurant?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(resFilterData);
                }}
              >
                Search
              </button>
            </div>
            {errorMessage && (
              <div className="error-container">{errorMessage}</div>
            )}
            <div className="restaurant-list">
              {allRestaurants &&
                filteredRestaurants.map((restaurant) => {
                  return (
                    <Link
                      to={"/restaurant/" + restaurant?.info?.id}
                      key={restaurant?.info?.id}
                    >
                      <ReastaurantCard {...restaurant?.info} />
                    </Link>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Body;
