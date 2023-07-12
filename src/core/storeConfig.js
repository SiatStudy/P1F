import { configureStore } from "@reduxjs/toolkit";

import userLoginReducer from "../store/userLogin";
import windowSizeReducer from "../store/windowSize";
import selectedYearEventReducer from "../store/selectedYearEvent";

export default configureStore({
   reducer : {
       userLogin : userLoginReducer,
       windowSize : windowSizeReducer,
       selectedYearEvent : selectedYearEventReducer
   }
});