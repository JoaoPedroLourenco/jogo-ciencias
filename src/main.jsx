import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Enigma1 from "./Routes/Enigma1.jsx";
import Enigma2 from "./Routes/Enigma2.jsx";
import Texto from "./components/Texto/Texto.jsx";
import WinPage from "./Routes/WinPage/WinPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Texto />,
      },
      {
        path: "enigma1",
        element: <Enigma1 />,
      },
      {
        path: "enigma2",
        element: <Enigma2 />,
      },
      {
        path: "vencedor",
        element: <WinPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
