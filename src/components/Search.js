import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CoinRapport from './CoinRapport'

import './Search.css'

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export default function Search() {
    const [currency,setCurrency] = useState([])
    const [search, setSearch] = useState('')


    useEffect(()=>  {
        axios.get(url)
        .then(res => {
            setCurrency(res.data)
            // console.log(res.data)
        }).catch(error => console.log(error))
    },[])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = currency.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    const marketEvo = (e) => {
        if(e.target.value === "Positif"){
            setSearch()
        }else{
            console.log("negatif")
        }
    }

    return (
        <div className="CoinContainer">
            <div className="CoinSearch">
                
                <form>
                    <input className="CoinInput" type="text" placeholder="enter your currency" onChange={handleChange} ></input>
                    <select onChange={marketEvo}>
                        <option>Positif</option>
                        <option>Negatif</option>
                    </select>
                </form>
            </div>     
            <div className="ContainerCard">
            {filteredCoins.map(coin => {
                return (
                    <CoinRapport 
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price} 
                    image={coin.image} 
                    symbol={coin.symbol} 
                    volume={coin.market_cap} 
                    low={coin.low_24h} 
                    hight={coin.high_24h} 
                    priceChange={coin.price_change_percentage_24h} 
                    lastUpdate ={coin.last_updated}
                    capitalisation={coin.market_cap}/>
                )
            })}       
            </div>
        </div>
    )
}
