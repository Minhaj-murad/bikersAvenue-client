import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import Toaster  from 'react-hot-toast';
function App() {
  return (

    <div className=' background'>
      <div className='outlet'>
        <RouterProvider router={router}> </RouterProvider>
        <Toaster></Toaster>
      </div>
      
    </div>
  );
}


export default App;
