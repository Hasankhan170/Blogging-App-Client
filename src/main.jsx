import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { ImageProvider } from './ImageContext'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Register',
        element: <Register />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Dashboard',
        element: <Dashboard />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <ImageProvider>
    <RouterProvider router={router} />
  </ImageProvider>
);
