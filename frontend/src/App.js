import { Outlet } from 'react-router-dom';
import Header from './component/header.js';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  //fetch products
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      const resData = await res.json();
      console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, []);
  console.log(productData);

  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="pt-14 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
