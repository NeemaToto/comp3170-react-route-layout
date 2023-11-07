import { useParams } from "react-router-dom"
import sample_listings from '../fixtures/sample_listings.json'
import { Link } from 'react-router-dom'

function getListing(id) {
    return sample_listings.find((listing) => listing.id === id)
}

export default function Listing() {
    const { id } = useParams()

    const listing = getListing(+id)


    if (!listing) {
        return <p>Something went wrong</p>
    }
    return (
        <div>
           <h3>{listing.name}</h3>
           <p>{listing.st_num} {listing.st_name}</p>
           <p>
            <Link to={`/${listing.city}/listings`}>
                {listing.city}
            </Link>
           </p>
           <p>
            Contact: {listing.phone}
           </p>
        </div>
    )
}
