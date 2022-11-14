import { configureStore } from "@reduxjs/toolkit";
import geTopRated from "./geTopRated";
import getPopular from "./getPopular";
import getTrend from "./getTrending";
import getUpcome from "./getUpcoming";

const store = configureStore({
  reducer: {
    geTopRated,
    getPopular,
    getTrend,
    getUpcome,
  },
});
export default store;
