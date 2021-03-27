import React, { useState, useEffect } from "react";
import { Context } from '../Context'
import { API_KEY, API_URL } from "../config";

import { GoodsList } from './GoodsList'
import { Preloader } from '../components/Preloader'
import { CartList } from './CartList'

function Shop() {
  const [goods, setGoods] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  const data = {
    addToCart,
    deleteToCart,
    goods,
    count,
    cart
  }

  function addToCart(item) {
    const id = item.mainId;
    if (cart[id] === undefined) {
      setCart({ ...cart, [id]: cart[id] = 1, })
      setCount(count + 1);
    } else {
      setCart({ ...cart, [id]: cart[id] + 1 })
      setCount(count + 1);
    }
  }

  function deleteToCart(item) {
    const id = item.mainId;
    
  }


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


  function handlerClick(event) {
    // console.log(event.target)

  }



  return (
    <Context.Provider value={data}>
      <div className="container content">
        <div onClick={handlerClick}> <CartList /></div>
        <div>{!isReady ? <Preloader /> : <GoodsList goods={goods} />}</div>
      </div>
    </Context.Provider>
  )
}

export { Shop };
