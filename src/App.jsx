
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import  { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx"
import { useEffect , lazy, Suspense,} from 'react';
import { refreshUser } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import { RestrictedRoute } from './components/AppBar/RestrictedRoute.jsx';
import { PrivateRoute } from './components/AppBar/PrivateRoute.jsx';

const Home = lazy(() => import("./pages/Home.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Registration = lazy(() => import("./pages/Registration.jsx"));





function App() {

  
  const dispatch = useDispatch();
  useEffect(() =>
{dispatch(refreshUser())},[dispatch]
  )
  const isRefreshing=useSelector(selectIsRefreshing)

  return(<Layout>
    { isRefreshing ? (<b>Refreshing user, please waite...</b>) :
      
        (<Suspense fallback={null}>
    <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<RestrictedRoute component={ <Registration/>} />} />
        <Route path="/login" element={<RestrictedRoute component={ <Login/>} />} />
          <Route path="/contacts" element={<PrivateRoute component={<Contacts/> } />} />
      </Routes>
      </Suspense> )
  }<Toaster
  position="bottom-right"
  reverseOrder={false}
/>
      </Layout>)
}

export default App
