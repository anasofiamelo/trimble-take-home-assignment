import { Outlet, createBrowserRouter } from 'react-router-dom'
import { routes } from '../constants/routes'

// components
import TrucksList, { loader as trucksLoader } from '../components/TrucksList'
import TruckForm from '../components/TruckForm'
import TruckDetails, { loader as truckDetailsLoader } from '../components/TruckDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: routes.trucks_list,
        element: <TrucksList />,
        loader: trucksLoader
      },
      {
        path: routes.truck_form,
        element: <TruckForm />
      },
      {
        path: routes.truck_details,
        element: <TruckDetails />,
        loader: truckDetailsLoader
      }
    ]
  }
])
