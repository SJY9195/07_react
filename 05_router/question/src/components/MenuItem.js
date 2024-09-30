import {Link} from "react-router-dom"

const MenuItem = ({menu}) => {
    return(
        <Link to={`/menu/${menu.id}`}> 
        <div className="MenuItem">
            <p>{menu.name} - \{menu.price}</p>
        </div>
        </Link>
    )
}

export default MenuItem;