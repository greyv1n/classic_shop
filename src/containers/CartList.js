import '../components/Cart/Cart.css'
import { Cart } from '../components/Cart/Cart'

import React, { useContext } from 'react'
import { Context } from '../Context'

function CartList() {
    const context = useContext(Context);
    const count = context.count;
    const goods = context.goods;
    const cart = context.cart;
    const handleCartShow = context.handleCartShow;
    const cartShow = context.cartShow;


    if (!goods.length) return null;
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['mainId']] = item;
        return accum;
    }, {})


    function totalPrice() {
        const totalSum = Object.keys(cart).reduce((sum, item) => {
            return sum + goodsObj[item]['price']['finalPrice'] * cart[item];
        }, 0)
        return totalSum;
    }

    return (
        <div className='product-container wrap'>
            <div className='cart-container'>
                <div className='cart' onClick={() => handleCartShow()}><i className="material-icons">shopping_cart</i>{count}</div>
                {
                    count ? (
                        <div className={!cartShow ? 'cart-hide' : ''}>
                            <div className="cart-wrap">
                                <div className='cart-close' onClick={() => handleCartShow()}><button className="btn-floating disabled"><i className="material-icons">close</i></button></div>
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
                                <div>Общая стоимость: <span className='cart-total-price'>{totalPrice()}</span> грн.</div>
                            </div>
                        </div>
                    ) :
                        <div className={!cartShow ? 'cart-hide' : ''}>
                            <div className="cart-wrap">
                                <div className='cart-close' onClick={() => handleCartShow()}><button className="btn-floating disabled"><i className="material-icons">close</i></button></div>
                                <div className='arrival-heading'><strong>Shopping Cart</strong></div>
                                <div className='cart-goods' >
                                    Корзина пуста
                            </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export { CartList };