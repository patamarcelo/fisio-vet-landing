import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { captureAttribution } from "./utils/attribution";
import { setupMetaPixel } from "./utils/metaPixel";

// Outside React effects: StrictMode/hydration cannot initialize tracking twice.
captureAttribution();
setupMetaPixel();

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);
if (root.querySelector("main")) hydrateRoot(root, app);
else createRoot(root).render(app);
