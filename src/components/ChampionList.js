const ChampionList = ({champions, championNames}) => {
    return (
        <div>
                {championNames.map( name => {
                    return (
                        <div key={name}>{name}</div>
                    )
                })}
        </div>
    )
}

export default ChampionList
