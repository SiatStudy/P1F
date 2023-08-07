import React from "react";
import style from "./SearchPage.module.css";
import Header from "../container/Header";
import SideMenu from "../container/SideMenu";
import UserInfo from "../container/UserInfo";
import SearchPageContainer from "../content/SearchPageContainer";
import { useParams } from "react-router-dom";

function SearchPage() {
  let { word } = useParams();

  return (
    <div className={style.Dday}>
      <div className={style.Side}>
        <SideMenu></SideMenu>
        <UserInfo></UserInfo>
      </div>
      <div className={style.Main}>
        <Header title="List Day">List Day</Header>
        <SearchPageContainer key={word} word={word}></SearchPageContainer>
      </div>
    </div>
  );
}

export default SearchPage;
