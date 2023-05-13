import { Outlet } from 'react-router-dom';
import Header from './component/header.js';

function App() {
  return (
    <div className = ''>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
