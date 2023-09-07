import { Box } from "@chakra-ui/react";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container />
    </Box>
  );
}

export default App;
