import { useEffect, useState } from "react"
import axios from "axios"
import ChampionList from "./components/ChampionList"
import ChampionDetail from "./components/ChampionDetail"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"

function App() {
  const [version, setVersion] = useState('')
  const [championNames, setChampionNames] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function fetchData() {
      const versionRes = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
      setVersion(versionRes.data[0])
      const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${versionRes.data[0]}/data/en_US/champion.json`)
      setChampionNames(Object.keys(res.data.data))
    }
    fetchData()
  }, [])

  const filteredNames = championNames.filter( n => n.toLowerCase().includes(filter.toLowerCase()))

  return (
    <BrowserRouter>
      <div>
        <NavLink to={'/'}>LOL Champion App</NavLink>
        <div>
          Search<input value={filter} onChange={(e) => setFilter(e.target.value)}/>
        </div>
        <ChampionList version={version} championNames={filteredNames} />
        <Routes>
          <Route path="/" element={<div>Home</div>}/>
          <Route path="/:name" element={<ChampionDetail version={version}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
