import { Router, dynamic } from "@hydrophobefireman/kit/router";
// lazy load routes here
const componentMap = {
  "/": { component: dynamic(() => import("../../pages/Landing")) },
  "/good": { component: dynamic(() => import("../../pages/Good")) },
  "/bad": { component: dynamic(() => import("../../pages/Bad")) },
};

export function RouteLoader() {
  return <Router paths={componentMap} />;
}
