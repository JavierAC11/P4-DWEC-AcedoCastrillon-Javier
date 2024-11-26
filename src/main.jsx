import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router}/>
  </UserProvider>,
)