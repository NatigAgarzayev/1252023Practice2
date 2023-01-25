import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App';
import Navbar from './components/Navbar/Navbar'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './pages/add/add/Add';
import Detail from './pages/detail/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/add", 
        element: <Add />
      },
      {
        path: "/detail/:id", 
        element: <Detail />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
