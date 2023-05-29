import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import AboutScreen from './screens/AboutScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeScreen/>
    ),
  },
  {
    path: "about",
    element: <AboutScreen/>,
  },
  {
    path: "book/:id",
    element: <BookScreen/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
