import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import SearchInput from "../../atoms/SearchInput";
import StatusBadge from "../../atoms/StatusBadge";

import { candidates } from "../../../data/candidates";

const CandidateTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    setFilteredCandidates(
      candidates.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(query) ||
          candidate.location.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  return (
    <Paper sx={{ borderRadius: 3, overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography
          text="Candidate Information"
          variant="subheading"
          bold
        />

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name or location"
          />

          <Button
            label="Filter"
            variant="outline"
            icon={<FilterListOutlinedIcon />}
          />

          <Button
            label=""
            variant="outline"
            icon={<MoreVertOutlinedIcon />}
          />
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>ADJUDICATION</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>DATE</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredCandidates.map((candidate, index) => (
              <TableRow key={index} hover>
                <TableCell>
                  <Typography text={candidate.name} variant="link" />
                </TableCell>

                <TableCell>{candidate.adjudication}</TableCell>

                <TableCell>
                  <StatusBadge status={candidate.status} />
                </TableCell>

                <TableCell>{candidate.location}</TableCell>

                <TableCell>{candidate.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            text={`${filteredCandidates.length} out of 84 results`}
            variant="label"
          />

          <Select size="small" defaultValue={10}>
            <MenuItem value={10}>10 per page</MenuItem>
            <MenuItem value={20}>20 per page</MenuItem>
            <MenuItem value={30}>30 per page</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small">
            <ChevronLeftOutlinedIcon />
          </IconButton>

          <Button label="1" variant="primary" />
          <Button label="2" variant="outline" />
          <Button label="3" variant="outline" />

          <IconButton size="small">
            <ChevronRightOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default CandidateTable;