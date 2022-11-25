
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../Components/Layout/DashBoardLayout/DashBoardLayout';
import Main from '../Components/Layout/Main';
import AddProduct from '../Components/Pages/Dashboad/AddProduct/AddProduct';
import AllBuyers from '../Components/Pages/Dashboad/AllBuyers';
import MyBookings from '../Components/Pages/Dashboad/MyBookings/MyBookings';
import Brand from '../Components/Pages/Home/Catagoories/Brands/Brand/Brand';
import Catagories from '../Components/Pages/Home/Catagoories/Catagories';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';
import MyBlog from '../Components/Pages/MyBlog/MyBlog';
import Register from '../Components/Pages/Register/Register';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';

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
                path:'/blog',
                element:<MyBlog></MyBlog>,
                
            },
            {
                path:'/bikecategories/:id',
                element:<PrivateRoute><Brand></Brand></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/bikecategories/${params.id}`)
                
            },
            
        ],
    },
    {
            path:'/dashboard',
            element:<DashBoardLayout></DashBoardLayout>,
            children:[
                {
                    path:'/dashboard/myorders',
                    element:<MyBookings></MyBookings>,
                },
                {
                    path:'/dashboard/allbuyers',
                    element:<AllBuyers></AllBuyers>,
                },
                {
                    path:'/dashboard/addbike',
                    element:<AddProduct></AddProduct>,
                },
            ]
    }
])


export default router;