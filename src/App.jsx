import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()

import Main from './layouts/Main/Main'
import Note from './pages/Note/Note'
import Archive from './pages/Archive/Archive'
import Wastebasket from './pages/Wastebasket/Wastebasket'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Note/>,
        errorElement: <Error />,
      },
      {
        path:'/archiwum',
        element: <Archive/>,
        errorElement: <Error />,
      },
      {
        path:'/kosz',
        element: <Wastebasket/>,
        errorElement: <Error />,
      },

      
    ],
  },
])
function App() {
  return (
    <div className='App'>
      <AppContext.Provider value={{}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
