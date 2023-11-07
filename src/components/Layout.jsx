import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <h1><Link style={{ textDecoration: 'none' }} to='/'>Rental Listings Finder</Link></h1>
            <Outlet />
        </div>
    )
}