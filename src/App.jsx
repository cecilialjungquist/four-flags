import { Outlet } from 'react-router-dom';
import './App.css';
import TopHeader from './components/TopHeader';


function App() {

  return (
    <>
      <TopHeader />
      <main>
        {/* Outlet via TopHeader and Navigation */}
        <Outlet />
      </main>

    </>
  )
}

export default App;
