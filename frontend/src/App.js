import { Outlet } from 'react-router-dom';
import Header from './component/header.js';

function App() {
  return (
    <div className = ''>
      <Header/>
      <main className='pt-14 bg-slate-200'>
        <Outlet />
        </main>
    </div>
  );
}

export default App;
