import { Route, Routes } from 'react-router-dom';
import "./assets/css/main.css";
import "./assets/css/sub.css";
import "./assets/css/add.css";
import "./assets/css/style.css";
import './index.css';
import "swiper/css"
import 'react-loading-skeleton/dist/skeleton.css'
import { privateRoutes, publicRoutes } from './routes/routes';
import DefaultLayout from './components/layout/DefaultLayout';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import { auth } from './firebase.config';
import Login from './pages/Login/Login';
import { AuthProvider } from './components/reducer/RequireAuth';
import { UserProvider } from './hooks/UserProvider';
export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = DefaultLayout;
          const Page = route.component;
          return <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            } />
        })}
        {privateRoutes.map((route, index) => {
          const Layout = DefaultLayout;
          const Page = route.component;
          return <Route
            key={index}
            path={route.path}
            element={
              <UserProvider>
                <Layout>
                  <Page />
                </Layout>
              </UserProvider>
            } />
        })}
      </Routes>
      <ToastContainer />
    </>

  )
}