import React, { Fragment, useEffect, useState } from "react";
import FlowerBox from "./FlowerBox";
import "./Home.css";
import PaginationsBox from "./PaginationsBox";

export default function Home() {
  const [flower, setFlower] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPagination, setCurrentPagination] = useState();



  const getFlower = (n = 1) => {
    setLoading(true);
    setCurrentPagination(n);

    let myString = "";
    for (let i = (n - 1) * 12; i < n * 12; i++) {
      myString = myString + i + ",";
    }
    myString = myString.slice(0, -1);
    console.log(myString);
    fetch(`https://flowers-api.onrender.com/flowers/${myString}`)
      .then((response) => response.json())
      .then((data) => {
        setFlower(data);
        setLoading(false);
      });
  };

  const setPaginationNumber =(paginationsNum)=>{

    sessionStorage.setItem('paginationNum',paginationsNum)
  }

    const getPaginationNumberFromSessionlStorage=()=>{
      if (sessionStorage.getItem("paginationNum")) {
        return JSON.parse(sessionStorage.getItem("paginationNum"));
      }
      return 1
    }
    
    

  useEffect(() => {
    getFlower(getPaginationNumberFromSessionlStorage());
   
  }, []);

  const totalItems = 13;

  const items = new Array(totalItems).fill(null);

  return (
    <>
      <div className="home-container">
        <div className="flower-container">
          {loading ? (
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          ) : (
            <>
              {flower.map((f, index) => (
                <Fragment key={index}>
                  {f !== null && (
                    <FlowerBox
                      name={f.flower_name}
                      img={f.flower_picture}
                      description={f.flower_description}
                      index={f.index}
                    />
                  )}
                </Fragment>
              ))}
            </>
          )}
        </div>
        <div className="paginations-container">
          <>
            {items.map((_, idx) => (
              <Fragment key={idx}>
                {currentPagination == idx + 1 ? (
                  <PaginationsBox number={idx + 1} click={getFlower}  enter={setPaginationNumber} active />
                ) : (
                  <PaginationsBox number={idx + 1} click={getFlower} enter={setPaginationNumber}/>
                )}
              </Fragment>
            ))}
          </>
        </div>
      </div>
    </>
  );
}
