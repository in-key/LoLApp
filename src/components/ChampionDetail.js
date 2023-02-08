import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const ChampionDetail = ({version}) => {
    const { name } = useParams()
    const [champion, setChampion] = useState(null)

    useEffect(() => {
        async function fetchChampion(){
            if (version && name){
                const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${name}.json`)
                setChampion(res.data.data[name])
            }
        }
        fetchChampion()
    }, [name, version])
    
    return (
        <div>
            <div>
                { name }
            </div>
            { champion &&
                champion.skins.map( skin => {
                    return (
                        <div key={skin.num}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`} alt={`${champion.id}-splashart-${skin.num}`}/>
                            <h2>{skin.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChampionDetail
