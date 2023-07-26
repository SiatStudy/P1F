import { configureStore } from "@reduxjs/toolkit";

import userLoginReducer from "../store/userLogin";
import windowSizeReducer from "../store/windowSize";
import selectedYearReducer from "../store/selectedYear";

export default configureStore({
   reducer : {
       userLogin : userLoginReducer,
       windowSize : windowSizeReducer,
       selectedYear : selectedYearReducer
   }
});