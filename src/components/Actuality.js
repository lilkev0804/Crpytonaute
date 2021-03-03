import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

import './Actuality.css'



export default function Actuality() {
    const [actuality, setActuality] = useState([''])

    let history = useHistory('')
    const actuUrl = "https://min-api.cryptocompare.com/data/v2/news/"
    useEffect(()=> {
       try{
        const fetch = async () => {
            const req = await axios.get(actuUrl)
            setActuality(req.data.Data)
        }
        fetch()
       }catch{
            history.goBack()
       }
    },[history])



    return (
        <div>
                <div className="actuality">
                    {actuality.map(actual => 
                    <div className="MainActuality">
                    
                        <div className="right">
                            <div className="topAct">
                                <img className="imgActuality" src={actual.imageurl} alt="salut"/>
                                <a className="TitleActuality" href={actual.url} rel="noreferrer" target="_blank" >{actual.title}</a>
                            </div>
                       
                            <div className="infoActuality">
                                {/* <p>Catégorie : {actual.categories}</p> */}
                                <p className="SourceActuality">{actual.source} - {actual.published_on}</p>
                            </div>
                            <p className="Resume">{actual.body ? actual.body.substring(0,150) + '...' : "No resume" }</p>
                            
                        </div>
                    </div>
                    )}
                </div>
                

        </div>
    )
}
