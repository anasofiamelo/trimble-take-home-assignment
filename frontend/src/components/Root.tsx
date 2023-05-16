import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/trucks">Trucks</Link>
        </li>
        <li>
          <Link to="/add-truck">Add truck</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Root
