import React from 'react';

const Products = ({ products, selectProduct, history }) => {
    const handlePurchase = prod => () => {
        selectProduct(prod)
        history.push('/checkout')
    }

    return products.map(prod => (
        <div className="product" key={prod.id}>
            <section>
                <h2>{prod.name}</h2>
                <p>{prod.desc}</p>
                <h3>{'$' prod.price}</h3>
                <button type="button" onClick={handlePurchase(prod)}>
                    PURCHASE
                </button>
            </section>
            <img src={prod.image} alt={prod.name} />
        </div>
    ))
}

export default Products