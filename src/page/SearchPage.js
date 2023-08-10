import React, { useState } from "react";
import style from "./Page.module.css";
import Header from "../container/Header";
import SideMenu from "../container/SideMenu";
import UserInfo from "../container/UserInfo";
import SearchPageContainer from "../content/SearchPageContainer";
import { useParams } from "react-router-dom";

function SearchPage() {
  const [titleh, setTitleh] = useState("List Day");
  let { word } = useParams();

  return (
    <div className={style.Page}>
      <div className={style.Side}>
      <SideMenu titleh={titleh} setTitleh={setTitleh}></SideMenu>
        <UserInfo></UserInfo>
      </div>
      <div className={style.Main}>
      <Header $titleh={titleh} />
        <SearchPageContainer key={word} word={word}></SearchPageContainer>
      </div>
    </div>
  );
}

export default SearchPage;
