import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { ComparisonPage } from "./pages/ComparisonPage";
import { StudentCornerPage } from "./pages/StudentCornerPage";
import { LoginPage } from "./pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "course/:id", Component: CourseDetailPage },
      { path: "compare", Component: ComparisonPage },
      { path: "student-corner", Component: StudentCornerPage },
    ],
  },
]);