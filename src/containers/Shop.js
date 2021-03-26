import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { GoodsList } from './GoodsList'
import { Preloader } from '../components/Preloader'

function Shop() {
  const [goods, setGoods] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [item, setItem] = useState([])

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
      type: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setIsReady(true);
      });
  }, []);


  function handlerClick() {
    console.log('ok')
  }

  return (
    <div className="container content">
      <div>{!isReady ? <Preloader /> : <GoodsList goods={goods} />}</div>
    </div>
  )
}

export { Shop };
