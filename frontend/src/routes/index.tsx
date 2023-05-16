import { createBrowserRouter } from 'react-router-dom'
import { routes } from '../constants/routes'

// components
import TrucksList, { loader as trucksLoader } from '../components/TrucksList'
import TruckForm from '../components/TruckForm'
import TruckDetails, { loader as truckDetailsLoader } from '../components/TruckDetails'
import AddLastLocation from '../components/TruckDetails/AddLastLocation'
import Root from '../components/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
      },
      {
        path: routes.add_last_location,
        element: <AddLastLocation />,
        loader: truckDetailsLoader
      }
    ]
  }
])
