import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Park from './pages/Park.jsx';
import Accomodation from './pages/Accomodation.jsx';
import BunnyJump from './components/attractions/BunnyJump';
import CherrysCars from './components/attractions/CherrysCars';
import TheTeaCup from './components/attractions/TheTeaCup';
import Facility from './components/facilities/Facility';
import TheCreepyCastle from './components/attractions/TheCreepyCastle';
import Tornado from './components/attractions/Tornado';
import LoopWhoop from './components/attractions/LoopWhoop';
import PageNotFound from './components/PageNotFound';

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
          },
          {
            path: 'cherrys-cars',
            element: <CherrysCars />
          },
          {
            path: 'the-tea-cup',
            element: <TheTeaCup />
          },
          {
            path: 'the-creepy-castle',
            element: <TheCreepyCastle />
          },
          {
            path: 'tornado',
            element: <Tornado />
          },
          {
            path: 'loop-whoop',
            element: <LoopWhoop />
          },
          {
            path: 'facilities/:id',
            element: <Facility />
          }
        ]
      },
      {
        path: 'accomodation',
        element: <Accomodation />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
