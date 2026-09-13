import { Box } from "@mui/material";

import Sidebar from "./components/molecules/Sidebar";
import TopBar from "./components/molecules/TopBar";
import CandidateTable from "./components/organisms/CandidateTable";

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    bgcolor: "background.default",
  },

  main: {
    flexGrow: 1,
    p: 3,
  },

  tableContainer: {
    mt: 2,
  },
};

const App = () => {
  return (
    <Box sx={styles.container}>
      <Sidebar />

      <Box component="main" sx={styles.main}>
        <TopBar />

        <Box sx={styles.tableContainer}>
          <CandidateTable />
        </Box>
      </Box>
    </Box>
  );
};

export default App;