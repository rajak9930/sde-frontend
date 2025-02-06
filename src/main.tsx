import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider,createTheme } from "@mantine/core";
import App from "./App.tsx";

const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    dark: [
      '#C1C2C5', // 0
      '#909296', // 1
      '#5C5F66', // 2
      '#373A40', // 3
      '#25262B', // 4
      '#1A1B1E', // 5
      '#141517', // 6
      '#101113', // 7
      '#0A0A0A', // 8
      '#000000', // 9
    ],
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark" >
      <App />
    </MantineProvider>
  </StrictMode>
);
