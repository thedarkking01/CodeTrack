import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children:[
        
        {
          path:"/trending",
          element: <Trending />,
          children: [
            
          ]
        },
        {
          path:"/saved",
          element: <Saved />,
          children: [
            
          ]
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