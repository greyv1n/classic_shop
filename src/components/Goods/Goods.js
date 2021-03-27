import React, {useContext} from 'react'
import {Context} from '../../Context'
import './Goods.css'

function Goods(props) {
    const {
        price,
        mainId,
        displayAssets,
        displayName,
        displayDescription,
    } = props;  

    const context = useContext(Context);

    return (
        <>
            <div className="card card-shadow">
                <div className="card-image">
                    <img src={displayAssets[0].url} alt={displayName} />
                    <span className="cards-title">{displayName}</span>
                </div>
                <div className="card-content">
                    <p>{displayDescription}</p>
                </div>
                <div className="card-action">
                    <button className='btn' onClick={()=> context.addToCart({
                        mainId,
                        displayName,
                    })}>Купить</button>
                    <span className='rigth'> Цена {price.finalPrice} грн</span>
                </div>
            </div>
        </>
    )
}

export { Goods };