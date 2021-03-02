import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

import './Actuality.css'


export default function Actuality() {
    const [actuality, setActuality] = useState([''])

    let history = useHistory('')

    useEffect(()=> {
       try{
        const fetch = async () => {
            const req = await axios.get("https://min-api.cryptocompare.com/data/v2/news/")
            setActuality(req.data.Data)
        }
        fetch()
       }catch{
            history.goBack()
       }
    },[])



    return (
        <div>
                <div className="actuality">
                    {actuality.map(actual => 
                    <div className="MainActuality">
                        
                        <div className="left">
                            <img className="imgActuality" src={actual.imageurl} alt="salut"/>
                        </div>    
                        <div className="right">
                        <a className="TitleActuality" href={actual.url} alt="_blanck" >{actual.title}</a>
                            <div className="infoActuality">
                                {/* <p>Catégorie : {actual.categories}</p> */}
                                <p className="SourceActuality">{actual.source} - {actual.published_on}</p>
                            </div>
                            <p className="Resume">{actual.body > 100 ? actual.body.substring(0,200) + '...' : actual.body }</p>
                            
                        </div>
                    </div>
                    )}
                </div>
                

        </div>
    )
}
