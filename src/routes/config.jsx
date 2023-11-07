import { Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../routes/Home'
import ListingForm from '../routes/ListingForm'
import Listings from '../routes/Listings'
import Listing from '../routes/Listing'



export const config = (
    <Route element={<Layout />}>
        <Route path='/'>
            <Route index element={<Home />} />
            <Route path='listings'>
                <Route index element={<Listings />} />
                <Route path=':id' element={<Listing />} />
                <Route path='new' element={<ListingForm />} />
            </Route>
            <Route path=':city'>
                <Route index element={<Listings />} />
                <Route path='listings' element={<Listings />} />
                <Route path='listings/:id' element={<Listings />} />
            </Route>
        </Route>
    </Route>
)