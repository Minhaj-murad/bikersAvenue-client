import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
function App() {
  return (

    <div className=' background'>
      <div className='outlet all-text'>
        <RouterProvider router={router}> </RouterProvider>
        <ToastContainer></ToastContainer>
        <Toaster></Toaster>
      </div>
      
    </div>
  );
}


export default App;
