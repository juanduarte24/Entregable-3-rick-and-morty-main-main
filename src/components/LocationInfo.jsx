import './styles/locationcard.css'
const LocationInfo = ({ location }) => {


    return (
        <div className='container'>

        <article className="card-location">
            <h2 className="name-location"> {location?.name}</h2>

            <ul className="list-location">
                <li className="item-location"><span>Type: </span><span className='names-items'>{location?.type}</span></li>
                <li className="item-location"><span>Dimension: </span><span className='names-items'>{location?.dimension}</span></li>
                <li className="item-location"><span>Population: </span><span className='names-items'>{location?.residents.length}</span></li>
            </ul>
        </article>
        </div>

    )
}
export default LocationInfo
