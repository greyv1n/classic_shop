import './Cart.css'
import React, {useContext} from 'react';
import {Context} from '../../Context'

function Cart(props) {
    const name = props.name;
    const price = props.price;
    const countGoods = props.countGoods;
    const image = props.image;
    const mainId = props.mainId;
    const context = useContext(Context);
  
    return (
        <>
            <div className="cart-item">
                <img src={image} alt={name} className='cart-img' />
                <div className='cart-name'>{name}</div>
                <div className='cart-col'>
                    <span className='cart-minus' onClick={()=> context.minusGoods({mainId})}>-</span>
                    <span className='cart-input'>{countGoods}</span>
                    <span className='cart-add' onClick={()=> context.addGoods({mainId})}>+</span>
                    <span className='cart-x'>X</span>
                    <span className='cart-price'>  {+countGoods * +price} грн.</span>
                </div>
                <button className='cart-trash' onClick={()=> context.deleteToCart({
                    mainId
                })}> <i className="material-icons">delete</i></button>
            </div>
        </>
    )
}

export { Cart }