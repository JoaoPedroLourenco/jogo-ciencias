import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Enigma1 from "./Routes/Enigma1.jsx";
import Enigma2 from "./Routes/Enigma2.jsx";
import Texto from "./components/Texto/Texto.jsx";
import WinPage from "./Routes/WinPage/WinPage.jsx";
import Enigma3 from "./Routes/Enigma3.jsx";
import Enigma4 from "./Routes/Enigma4.jsx";
import Enigma5 from "./Routes/Enigma5.jsx";
import Enigma6 from "./Routes/Enigma6.jsx";
import Enigma7 from "./Routes/Enigma7.jsx";

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
        path: "enigma3",
        element: <Enigma3 />,
      },
      {
        path: "enigma4",
        element: <Enigma4 />,
      },
      {
        path: "enigma5",
        element: <Enigma5 />,
      },
      {
        path: "enigma6",
        element: <Enigma6 />,
      },
      {
        path: "enigma7",
        element: <Enigma7 />,
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
