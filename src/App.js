import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (

    <div className='h-[1440px] background'>
      <div className='outlet'>
        <RouterProvider router={router}> </RouterProvider>
      </div>

    </div>
  );
}


export default App;
