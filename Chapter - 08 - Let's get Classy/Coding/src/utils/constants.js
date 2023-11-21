// Image CDN URL for Restaurant card
export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant data with corsproxy
// export const food_api_URL = "https://63ecf35532a0811723a5b048.mockapi.io/food";

// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2758934&lng=70.7779983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.2758934&lng=70.7779983&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;
// Github - username
export const Github_UserName = "yashkhokhar28";
export const Github_Repository_Name = "namaste-react";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/yashkhokhar28/";
export const Twitter_Link = "https://twitter.com/yashkhokhar28";
export const Github_Link = "https://github.com/yashkhokhar28";
export const Email_Link = "mailto:yashkhokhar28@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};
// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
