import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Park from './pages/Park.jsx';
import Accomodation from './pages/Accomodation.jsx';
import BunnyJump from './components/attractions/BunnyJump';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'the-park',
        element: <Park />,
        children: [
          {
            path: 'bunny-jump',
            element: <BunnyJump />
          }
        ]
      },
      {
        path: 'accomodation',
        element: <Accomodation />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
