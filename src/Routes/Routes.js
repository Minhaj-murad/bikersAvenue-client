
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Components/Layout/Main';
import Brand from '../Components/Pages/Home/Catagoories/Brands/Brand/Brand';
import Catagories from '../Components/Pages/Home/Catagoories/Catagories';
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
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/bikecategories')
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
            {
                path:'/',
                element:<Catagories></Catagories>,
                
            },
            {
                path:'/bikecategories/:id',
                element:<Brand></Brand>,
                loader: ({params})=> fetch(`http://localhost:5000/bikecategories/${params.id}`)
                
            },
            
        ],
    }
])


export default router;