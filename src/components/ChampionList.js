import { NavLink } from "react-router-dom";
import './ChampionList.css'

const ChampionList = ({ version, championNames }) => {
  return (
    <div className="champion-list">
      {championNames.map((name) => {
        return (
          <div key={name}>
            <NavLink to={`/${name}`}>
              <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${name}.png`} alt={`${name}`} width='50'/>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default ChampionList
