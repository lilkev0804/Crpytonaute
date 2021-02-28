import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CoinRapport from './CoinRapport'

import './Search.css'

export const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export default function Search() {
    const [currency,setCurrency] = useState([])
    const [search, setSearch] = useState('')
    const [visible, setVisible] =useState(false)
    const [invisible, setInvisible] = useState(false)

    const[ variation,setVariation] = useState([])
    // useEffect(()=>  {
    //     axios.get(url)
    //     .then(res => {
    //         setCurrency(res.data)
    //         setChange(res.data.price_change_percentage_24h)
    //     }).catch(error => console.log(error))
    // },[])

    useEffect(() => {
        const fetchData = async() => {
            const req = await axios.get(url)
            setCurrency(req.data)
            // setCrypto(req.data.price_change_percentage_24h)
        }
        fetchData()
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleClick = () => {
        setVisible(true)
        setInvisible(false)
    }
    const filteredCoins = currency.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
        
    const marketEvo = (e) => {
        setInvisible(true)
        setSearch('')
      if(e.target.value === "Positif"){
        setVariation(currency.filter(cur => cur.price_change_percentage_24h > 0))
        setVisible(false)
      }
      else{
        setVariation(currency.filter(cur => cur.price_change_percentage_24h < 0))
        setVisible(false)
      }
    }


    return (
        <div className="CoinContainer">
            <div className="CoinSearch">
                
                <div className="choiceSearch">
                    <input className="CoinInput" type="text" placeholder="Rechercher un crypto" value={search} onClick={handleClick} onChange={handleChange} ></input>
                    <select className='selectorOption' onChange={marketEvo}>
                        <option>Tout</option>
                        <option>Positif</option>
                        <option>Negatif</option>
                    </select>
                </div>
            </div>     
            <div className="ContainerCard" style={{
                display : `${invisible ? "none" : "flex"}`
            }}>
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
            <div className="ContainerCard" style={{
                display : `${visible ? "none" : "flex"}`
            }}>
            {variation.map(coin => {
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
