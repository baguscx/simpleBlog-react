import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs";
import SinglePost from "../pages/blogs/_id";
import RootLayout from "../layouts/RootLayout";
import { posts, postsById } from "../apis/loader";
import ErrorPage from "../components/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blogs/:id",
        element: <SinglePost />,
        loader: postsById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    // action: () => <Index />,
  },
]);
