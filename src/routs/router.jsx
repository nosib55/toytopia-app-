import { createBrowserRouter } from  "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import AllToys from "../components/AllToys";
import Blog from "../components/Blog";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
// import MapToys from "../pages/MapToys";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import ToyDetail from "../pages/ToyDetail";
import ProtectedRoute from "../context/ProtectedRouter";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import MyPurchases from "../pages/MyPurchases";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    { 
        path :"/",
        element :<HomeLayout></HomeLayout>,
        children:[{
            index: true ,
            element : <Home></Home>
            },
           {
            path :"toys",
            element : <AllToys></AllToys>
            },
           {
            path :"mypurchases",
            element :<ProtectedRoute><MyPurchases></MyPurchases></ProtectedRoute>
            },
           {
            path :"privacy",
            element :<PrivacyPolicy></PrivacyPolicy>
            },
           {
            path :"contact",
            element :<Contact></Contact>
            },
           {
            path :"terms",
            element :<Terms></Terms>
            },
            
            {
             path : "blog",
           element : <Blog></Blog>
            },
            {
             path : "/login",
           element : <Login></Login>
            },
            {
             path : "/singup",
           element : <SingUp></SingUp>
            },
            {
             path : "/profile",
           element : <Profile></Profile>
            },
            {
             path:"/toys/:toyId",

             element:<ProtectedRoute><ToyDetail></ToyDetail>
             </ProtectedRoute> 
           },
           {
             path : "*",
           element :<ErrorPage></ErrorPage>
            },
          
    ]
    },
      
   
])
export default router ;