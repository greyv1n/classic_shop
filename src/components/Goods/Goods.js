import './Goods.css'

function Goods(props) {
    const {
        price,
        mainId,
        displayAssets,
        displayName,
        displayDescription,
    } = props;


    return (
        <>
            <div className="card card-shadow" id={mainId}>
                <div className="card-image">
                    <img src={displayAssets[0].url} alt={displayName} />
                    <span className="cards-title">{displayName}</span>
                </div>
                <div className="card-content">
                    <p>{displayDescription}</p>
                </div>
                <div className="card-action">
                    <button className='btn'>Купить</button>
                    <span className='rigth'> Цена {price.finalPrice} грн</span>
                </div>
            </div>
        </>
    )
}

export { Goods };