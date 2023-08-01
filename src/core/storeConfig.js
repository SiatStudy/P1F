import { configureStore } from "@reduxjs/toolkit";

import userLoginReducer from "../store/userLogin";
import windowSizeReducer from "../store/windowSize";
import selectedYearReducer from "../store/selectedYear";
import searchDataReducer from "../store/searchData";

export default configureStore({
   reducer : {
       userLogin : userLoginReducer,
       windowSize : windowSizeReducer,
       selectedYear : selectedYearReducer,
       searchData : searchDataReducer
   }
});