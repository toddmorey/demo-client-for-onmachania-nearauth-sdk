import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// component imports
import App from './App'
import NearLogin from './routes/NearLogin'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <p>The home route</p>,
      },
      {
        path: "near-login",
        element: <NearLogin/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)