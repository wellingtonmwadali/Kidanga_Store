import Header from './component/header.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className = ''>
      <Header/>
      <main className=''>
        <Outlet />
        </main>
    </div>
  );
}

export default App;
