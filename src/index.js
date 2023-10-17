import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Configuracoes from './routes/Configuracoes';
import Categorias from './routes/Categorias';
import CategDespesas from './routes/CategDespesas';
import Contato from './routes/Contato';
import SobreNos from './routes/SobreNos';
import Login from './routes/Login';
import Cadastro from './routes/Cadastro';
import Lancamentos from './routes/Lancamentos';
import Contas from './routes/Contas';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/Configuracoes",
        element: <Configuracoes />
      },
      {
        path: "/Categorias",
        element: <Categorias />
      },
      {
        path: "/Categorias/Despesas",
        element: <CategDespesas />
      },
      {
        path: "/Contato",
        element: <Contato />
      },
      {
        path: "/SobreNos",
        element: <SobreNos />
      },
      {
        path: "/Lancamentos",
        element: <Lancamentos />
      },
      {
        path: "/Contas",
        element: <Contas />
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
