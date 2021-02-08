import React from 'react'

export default function CoinRapport({name , image, symbol, price, volume, low, hight , priceChange}) {
    return (
        <div className="CoinLine">
            <div className="CoinRow">
                <div>
                    <img src={image} alt={name}></img>
                    <p>{name}</p>
                    <p>{symbol}</p>
                </div>
                <div>
                    <p> $ {price}</p>
                    <p>${volume.toLocaleString()}</p>
                </div>
                <div>
                    {priceChange < 0 ? (
                        <p>{priceChange.toFixed(2)}%</p>
                    ) : ( <p>{priceChange.toFixed(2)}%</p>) }
                </div>
            </div>
        </div>
    )
}
