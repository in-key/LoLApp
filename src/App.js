import { useEffect, useState } from "react"
import axios from "axios"
import ChampionList from "./components/ChampionList"
import ChampionDetail from "./components/ChampionDetail"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"

function App() {
  const [champions, setChampions] = useState({})
  const [championNames, setChampionNames] = useState([])

  useEffect(() => {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json"
      )
      .then((res) => {
        setChampions(res.data.data)
      })
  }, [])

  useEffect(() => {
    const names = []
    for (let c in champions) {
      names.push(c)
    }
    setChampionNames(names)
  }, [champions])

  return (
    <BrowserRouter>
      <div>
        <NavLink to={'/'}>LOL Champion App</NavLink>
        <ChampionList championNames={championNames} />
        <Routes>
        <Route path="/" element={<div>Home</div>}/>
          <Route path="/:name" element={<ChampionDetail champions={champions}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
