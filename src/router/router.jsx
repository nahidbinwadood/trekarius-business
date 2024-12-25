import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import PlanTripPage from "@/pages/PlanTripPage";
import AboutPage from "@/pages/AboutPage";
import ContestPage from "@/pages/ContestPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import PhotoContest from "@/pages/PhotoContest";
import JoinCommunityPage from "@/pages/JoinCommunityPage";
import ShopPage from "@/pages/ShopPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CartPage from "@/pages/CartPage";
import ErrorPage from "@/pages/Error/ErrorPage";
import PhotoGallery from "@/pages/PhotoGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/plan-your-trip",
        element: <PlanTripPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contest",
        element: <ContestPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "/contest/photo-contest",
        element: <PhotoContest />
      },
      {
        path: "/join-community",
        element: <JoinCommunityPage />
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/photo-gallery",
        element: <PhotoGallery />
      },
    ],
  },
]);

export default router;
