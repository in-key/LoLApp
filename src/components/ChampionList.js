import { NavLink } from "react-router-dom";

const ChampionList = ({ championNames }) => {
  return (
    <div style={{display: 'inline-flex'}}>
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
