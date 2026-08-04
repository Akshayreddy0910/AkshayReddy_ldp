import { Box } from "@mui/material";

import Sidebar from "./components/molecules/Sidebar";
import TopBar from "./components/molecules/TopBar";
import CandidateTable from "./components/molecules/CandidateTable";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <TopBar />

        <Box
          sx={{
            mt: 2,
          }}
        >
          <CandidateTable />
        </Box>
      </Box>
    </Box>
  );
};

export default App;