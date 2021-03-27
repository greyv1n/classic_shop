import '../components/Cart/Cart.css'
import { Cart } from '../components/Cart/Cart'

import React, { useContext } from 'react'
import { Context } from '../Context'

function CartList() {
    const context = useContext(Context);
    const count = context.count;
    const goods = context.goods;
    const cart = context.cart;

    if (!goods.length) return null;
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['mainId']] = item;
        return accum;
    }, {})

    return (
        <>
            <div className=' cart'><i className="material-icons">shopping_cart</i>{count}</div>
            {
                count ? (
                    <>
                        <div className='arrival-heading'><strong>Shopping Cart</strong></div>
                        <div className='cart-goods' >
                            {Object.keys(cart).map(item => <Cart
                                key={item}
                                name={goodsObj[item]['displayName']}
                                price={goodsObj[item]['price']['finalPrice']}
                                countGoods={cart[item]}
                                image={goodsObj[item]['displayAssets'][0]['background']}
                                mainId={item}
                            />)}
                        </div>
                    </>
                ) : null
            }
        </>
    )
}

export { CartList };