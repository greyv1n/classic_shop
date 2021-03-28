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
  const [cartShow, setCartShow] = useState(false);

  const data = {
    addToCart,
    deleteToCart,
    handleCartShow,
    addGoods,
    minusGoods,
    cartShow,
    goods,
    count,
    cart
  }

  function addGoods(item) {
    let id = item.mainId;
    setCart({ ...cart, [id]: cart[id] + 1, })
    setCount(count + 1);
  }

  function minusGoods(item) {
    let id = item.mainId;
    if (cart[id] > 1) {
      setCart({ ...cart, [id]: cart[id] - 1, })
      setCount(count - 1);
    } else {
      deleteToCart(item);
    }
  }

  function handleCartShow() {
    setCartShow(!cartShow);
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
    if (count > 0) {
      let newCart = {}
      let countItem;

      Object.keys(cart).map(key => key !== id ? newCart[key] = cart[key] : countItem = cart[key]);
      setCart(newCart);
      setCount(count - countItem);
    }
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

  return (
    <Context.Provider value={data}>
      <div className="container content">
        <div> <CartList /></div>
        <div>{!isReady ? <Preloader /> : <GoodsList goods={goods} />}</div>
      </div>
    </Context.Provider>
  )
}

export { Shop };
