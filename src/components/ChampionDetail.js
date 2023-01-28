import { useParams } from "react-router-dom"

const ChampionDetail = ({champions}) => {
    const { name } = useParams()
    return (
        <div>
            { name }
        </div>
    )
}

export default ChampionDetail
