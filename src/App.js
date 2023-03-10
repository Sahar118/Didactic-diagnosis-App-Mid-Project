import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import './App.css';

import {
  Login,
  Signup,
  Project,
  Dashboard,
  Create,
  Error,
  RootLayout
} from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/create', element: <Create /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: < Signup /> },
      { path: '/projects/:id', element: <Project /> }
    ]
  },
])

function App() {
  return (
    <div className="App">
      <div className='container'>
        <RouterProvider router={router} />

      </div>
    </div>
  );
}

export default App;
