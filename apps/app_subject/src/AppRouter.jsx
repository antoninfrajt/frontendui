import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";
import { SubjectRouterSegment } from "../../../packages/subject/src";

export const Routes = [
    // UserRouterSegment,
    SubjectRouterSegment
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

