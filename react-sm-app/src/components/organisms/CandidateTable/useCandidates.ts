import { useEffect, useState } from "react";
import { candidates, type Candidate } from "../../../data/candidates";

export const useCandidates = () => {
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

  return { searchQuery, setSearchQuery, filteredCandidates };
};
