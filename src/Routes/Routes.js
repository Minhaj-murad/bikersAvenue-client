
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import ErrorPage from '../Components/Shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:  [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
            
        ],
    }
])


export default router;