import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "../components/Layout";
import CoverageExample from "../pages/CoverageExample";
//const CoverageExample = lazy(() => import("../pages/CoverageExample"));
const CoverageExampleOpti = lazy(() => import("../pages/CoverageExampleOpti"));
const PerformanceExample = lazy(() => import("../pages/PerformanceExample"));
const PerformanceExampleOpti = lazy(() =>
  import("../pages/PerformanceExampleOpti")
);
const AdvanceExample = lazy(() => import("../pages/AdvanceExample"));
const AdvanceExampleOpti = lazy(() => import("../pages/AdvanceExampleOpti"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route
          index={true}
          element={<Navigate replace to="/coverage-analysis" />}
        />
        {/* <Route
          path="coverage-analysis"
          element={
            <Suspense fallback={<>Loading...</>}>
              <CoverageExample />
            </Suspense>
          }
        /> */}
        <Route path="coverage-analysis" element={<CoverageExample />} />
        <Route
          path="coverage-analysis-optimize"
          element={
            <Suspense fallback={<>Loading...</>}>
              <CoverageExampleOpti />
            </Suspense>
          }
        />
        <Route
          path="performance-profiling"
          element={
            <Suspense fallback={<>Loading...</>}>
              <PerformanceExample />
            </Suspense>
          }
        />
        <Route
          path="performance-profiling-optimize"
          element={
            <Suspense fallback={<>Loading...</>}>
              <PerformanceExampleOpti />
            </Suspense>
          }
        />
        {/* <Route
          path="advance"
          element={
            <Suspense fallback={<>Loading...</>}>
              <AdvanceExample />
            </Suspense>
          }
        /> */}
        <Route
          path="advance-optimization"
          element={
            <Suspense fallback={<>Loading...</>}>
              <AdvanceExampleOpti />
            </Suspense>
          }
        />
      </Route>
    </Route>
  )
);

const CustomRoutes = () => {
  return <RouterProvider router={router} />;
};

export default CustomRoutes;
