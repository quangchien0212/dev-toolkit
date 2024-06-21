import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes/routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div className='app w-screen h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App