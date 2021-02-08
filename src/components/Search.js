import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CoinRapport from './CoinRapport'

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export default function Search() {
    const [currency,setCurrency] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>  {
        axios.get(url)
        .then(res => {
            setCurrency(res.data)
            console.log(res.data)
        }).catch(error => console.log(error))
    },[])

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const filteredCoins = currency.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

    return (
        <div className="CoinContainer">
            <div className="CoinSearch">
                <h1>Search your currency</h1>
                <form>
                    <input className="CoinInput" type="text" placeholder="enter your currency" onClick={(e) => handleChange(e)}></input>
                </form>
            </div>     
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
                      priceChange={coin.price_change_percentage_24h} />
                )
            })}       
        </div>
    )
}
