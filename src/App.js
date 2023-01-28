import { useEffect, useState } from "react"
import axios from "axios"
import ChampionList from "./components/ChampionList"

function App() {
  const [champions, setChampions] = useState({})
  const [championNames, setChampionNames] = useState([])

  useEffect(() => {
    axios
      .get('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
      .then(res => {
        setChampions(res.data.data)
      })
  }, [])

  useEffect(() => {
    const names = []
    for (let c in champions){
      names.push(c)
    }
    setChampionNames(names)
  }, [champions])

  return (
    <div className="App">
      LOL Champion App
      <ChampionList champions={champions} championNames={championNames}/>
    </div>
  );
}

export default App;
