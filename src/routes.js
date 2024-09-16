import Home from "./components/Home";
import PostJob from "./components/PostJob";
import JobListings from "./components/JobListings";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/post-job",
    element: <PostJob />,
    errorElement: <ErrorPage />
  },
  {
    path: "/job-listings",
    element: <JobListings />,
    errorElement: <ErrorPage />
  }
];

export default routes;
