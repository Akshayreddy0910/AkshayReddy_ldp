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

import { candidates, type Candidate } from "../../../data/candidates";
import {
  CANDIDATE_TABLE_HEADERS,
  CANDIDATE_TABLE_TEXT,
  DEFAULT_PAGE_SIZE,
  PAGE_SIZE_LABEL_SUFFIX,
  PAGE_SIZE_OPTIONS,
} from "../../../utils/constants";

import { styles } from "./styles";

const CandidateTable = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCandidates, setFilteredCandidates] =
    useState<Candidate[]>(candidates);

  useEffect(() => {
    const query = searchQuery.toLowerCase();

    setFilteredCandidates(
      candidates.filter(
        (candidate: Candidate) =>
          candidate.name.toLowerCase().includes(query) ||
          candidate.location.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.header}>
        <Typography text={CANDIDATE_TABLE_TEXT.title} variant="subheading" />

        <Box sx={styles.headerActions}>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={CANDIDATE_TABLE_TEXT.searchPlaceholder}
          />

          <Button
            label={CANDIDATE_TABLE_TEXT.filterLabel}
            variant="outline"
            icon={<FilterListOutlinedIcon />}
          />

          <IconButton size="small">
            <MoreVertOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {CANDIDATE_TABLE_HEADERS.map((header: string) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredCandidates.map((candidate: Candidate, index: number) => (
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

      <Box sx={styles.footer}>
        <Box sx={styles.footerLeft}>
          <Typography
            text={`${filteredCandidates.length} ${CANDIDATE_TABLE_TEXT.resultsSuffix.replace(
              "{total}",
              String(CANDIDATE_TABLE_TEXT.totalResults)
            )}`}
            variant="label"
          />

          <Select size="small" defaultValue={DEFAULT_PAGE_SIZE}>
            {PAGE_SIZE_OPTIONS.map((size: number) => (
              <MenuItem key={size} value={size}>
                {size} {PAGE_SIZE_LABEL_SUFFIX}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box sx={styles.footerRight}>
          <IconButton size="small">
            <ChevronLeftOutlinedIcon />
          </IconButton>

          <Button label="1" variant="primary" sx={styles.pageButton} />
          <Button label="2" variant="outline" sx={styles.pageButton} />
          <Button label="3" variant="outline" sx={styles.pageButton} />

          <IconButton size="small">
            <ChevronRightOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default CandidateTable;
