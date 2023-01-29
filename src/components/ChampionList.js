import { NavLink } from "react-router-dom";
import './ChampionList.css'

const ChampionList = ({ championNames }) => {
  return (
    <div className="champion-list">
      {championNames.map((name) => {
        return (
          <div key={name}>
            <NavLink to={`/${name}`}>
              {name}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default ChampionList
