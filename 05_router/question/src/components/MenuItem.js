import {Link} from "react-router-dom"

const MenuItem = ({menu}) => {
    return(
        <Link to={`/menu/${menu.id}`}> 
        <div className="MenuItem">
            <li>{menu.name} - \{menu.price}</li>
        </div>
        </Link>
    )
}

export default MenuItem;