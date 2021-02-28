import React from 'react'
import './CoinRapport.css'

export default function CoinRapport({name , image, symbol, price, volume, low, hight , priceChange, lastUpdate, capitalisation, show}) {
    return (
        <div className="CoinCard">
                <div className="CoinCardTop">
                    <img className="CoinImg" src={image} alt={name}></img>
                    <p className="CoinName">{name}  / <span className="CoinSymbol">{symbol}</span></p>
                </div>
                <div>
                    <p className="CoinValue"><span className="CoinInfo">Cours :</span> $ {price}</p>
                    <p><span className="CoinInfo">Volume sur 24h :</span> ${volume.toLocaleString()}</p>
                    <p className="CoinValue"><span className="CoinInfo">Capitalisation :</span> $ {capitalisation}</p>
                    <p><span className="CoinInfo">Derniere actualisation :</span> {lastUpdate.slice(11, -5).replace(':' , 'h')} GMT </p>
                </div>
                <div>
                    {priceChange < 0 ? (
                        <p className="PriceRed"><span className="CoinInfoVar">Variation sur 24h : </span> {priceChange.toFixed(2)}%</p>
                    ) : ( <p className="PriceGreen"><span className="CoinInfoVar">Variation sur 24h : </span>{priceChange.toFixed(2)}%</p>) }
                </div>
        </div>
    )
}
