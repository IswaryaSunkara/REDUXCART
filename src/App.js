import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import Rootlayout from './Components/Rootlayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
