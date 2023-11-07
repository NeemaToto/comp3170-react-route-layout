import { useParams } from "react-router-dom"
import sample_listings from '../fixtures/sample_listings.json'
import { Link } from 'react-router-dom'

export default function Listings() {
    const { city } = useParams();

    let listings = sample_listings;
    if (city) {
        listings = sample_listings.filter((listing) => {
            return (
                listing.city === city
            )
        })
    }

    return (
        <div>
            <p>Listings Page</p>
            <p><Link to='/listings/new'>Create new Listings</Link></p>
            {
                listings && listings.map((listing) => {
                    return (
                        <div key={listing.id} style={{ margin: '3rem', border: '1px solid', padding: '2rem'}}>
                            <p>{listing.name}</p>
                            <p>
                            <Link to={`/${listing.city}/listings`}>
                                {listing.city}
                            </Link>
                            </p>
                            <p>
                                <Link to={`/listings/${listing.id}`}>
                                    Read more
                                </Link>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
