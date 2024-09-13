import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';


function App( ) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/home",
      element: <Home />
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
