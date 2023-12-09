import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Notfound from './components/Notfound';


const routes = createBrowserRouter([{
  path: "", element: <Layout />, children: [
    {index:true,element:<Dashboard/>},
  
    { path: "*", element: <Notfound /> }
  ]
}])

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
