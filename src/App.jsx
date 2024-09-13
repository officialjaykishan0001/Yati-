import './App.css';
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/home",
    element: <Home/>
  }

]);

function App() {
  return (
    <>
      {/* <div className="text-red-600 text-4xl">Yati</div> */}
    
      <RouterProvider router={router} />
    </>
  );
}

export default App;
