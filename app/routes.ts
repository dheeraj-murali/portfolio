import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/layout.tsx", [
    index("./routes/home.tsx"),
    route("/blog/:slug", "./routes/blog.tsx"),
  ]),
] satisfies RouteConfig;
