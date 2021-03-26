import { Goods } from '../components/Goods/Goods'

function GoodsList(props) {
    const { goods = [] } = props;

    if (!goods.length) {
        return <h3>Ничего нет</h3>
    }

    return (


        <section className="new-arrival">
            <div className="arrival-heading">
                <strong>New Arrival</strong>
                <p>We Provide You New Fasion Design Clothes</p>
            </div>

            <div className="product-container">
                <div className="goods">
                    {goods.map(item => <Goods key={item.mainId} {...item} />)}
                </div>
            </div>
        </section>
    )
}

export { GoodsList }