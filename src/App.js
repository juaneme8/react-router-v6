import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )

}

export default App
