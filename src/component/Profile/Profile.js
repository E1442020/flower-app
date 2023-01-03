import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { useParams } from "react-router-dom";
import coverImage from "../Images/pexels-fu-zhichao-581222.jpg";

import "./Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [iconSelected, setIconSelected] = useState(false);
  const loadingCover = useRef();

  const getFavouriteFromLocalStorage = () => {
    if (localStorage.getItem("flower")) {
      return JSON.parse(localStorage.getItem("flower"));
    }
    return [];
  };

  const addToFavourite = (item) => {
    console.log(item);
    const favouriteFlowers = getFavouriteFromLocalStorage();

    if (favouriteFlowers.includes(item)) {
      let index = favouriteFlowers.indexOf(item);
      favouriteFlowers.splice(index, 1);
      localStorage.setItem("flower", JSON.stringify(favouriteFlowers));
      setIconSelected(false);
    } else {
      favouriteFlowers.push(item);
      localStorage.setItem("flower", JSON.stringify(favouriteFlowers));
      setIconSelected(true);
    }
  };

  const checkIsFavorite = (item) => {
    const favouriteFlowers = getFavouriteFromLocalStorage();
    item = parseInt(item);

    if (favouriteFlowers.includes(item)) {
      setIconSelected(true);
    } else {
      setIconSelected(false);
    }
  };

  const onloadingHandle = () => {
    loadingCover.current.style.display = "block";
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://flowers-api.onrender.com/flower/${params.index}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);

        setLoading(false);
      });

    checkIsFavorite(params.index);
  }, []);
  function goBack() {
    window.history.back();
  }
  return (
    <>
      {loading ? (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      ) : (
        <div className="protofile-container">
          <div className="cover">
            <img
              src={coverImage}
              alt=""
              ref={loadingCover}
              onLoad={onloadingHandle}
            />
          </div>
          <div className="imgCont">
            <img src={profile.flower_picture} alt="" />
          </div>

          <div className="protofile-content">
            <h3>Name: {profile.flower_name}</h3>
            <p className="desc">Description: {profile.flower_description}</p>
            {iconSelected ? (
              <MdFavorite
                className="selectedIcon"
                size={30}
                onClick={() => addToFavourite(profile.index)}
              />
            ) : (
              <MdFavorite
                className="notSelectedIcon"
                size={30}
                onClick={() => addToFavourite(profile.index)}
              />
            )}

            <button className="flex" onClick={goBack}>
              <BiArrowBack /> back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
