import "@hydrophobefireman/kit/styles";

// javascript is supported
import "./App.css";

import { AlertRoot } from "@hydrophobefireman/kit/alerts";
import { VNode, render } from "@hydrophobefireman/ui-lib";

import { RouteLoader } from "./components/RouteLoader";

function App(): VNode {
  return (
    <AlertRoot>
      <main>
        <RouteLoader />
      </main>
    </AlertRoot>
  );
}

render(<App />, document.getElementById("app-mount"));
