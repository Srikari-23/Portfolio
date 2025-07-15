
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './components/Projects';
function App() {
  const routes = createBrowserRouter([{
    path: '/',
    element: <Profile />
  },
  {
    path:"/aboutMe",
    element:<About/>
  }])
  return (
    <>

      <Navbar />
      <Profile/>
      <About/>
      <Projects/>
      {/* <RouterProvider router={routes}></RouterProvider> */}
    </>
  )
}

export default App
