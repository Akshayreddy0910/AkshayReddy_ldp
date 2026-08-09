export const APP_NAME = "RECRUIT";

export const CURRENT_USER = {
  name: "James Rodriguez",
  handle: "James.co",
};

export const TOPBAR_TEXT = {
  title: "Candidates",
  exportLabel: "Export",
  manualOrderLabel: "Manual Order",
};

export const SIDEBAR_LINKS = [
  { key: "home", label: "Home" },
  { key: "candidates", label: "Candidates" },
  { key: "adverseActions", label: "Adverse Actions" },
  { key: "logs", label: "Logs" },
  { key: "analytics", label: "Analytics" },
  { key: "account", label: "Account" },
  { key: "screenings", label: "Screenings" },
] as const;

export const CANDIDATE_TABLE_TEXT = {
  title: "Candidate Information",
  searchPlaceholder: "Search by name or location",
  filterLabel: "Filter",
  totalResults: 84,
  resultsSuffix: "out of {total} results",
};

export const CANDIDATE_TABLE_HEADERS = [
  "NAME",
  "ADJUDICATION",
  "STATUS",
  "LOCATION",
  "DATE",
] as const;

export const PAGE_SIZE_OPTIONS = [10, 20, 30] as const;

export const PAGE_SIZE_LABEL_SUFFIX = "per page";

export const DEFAULT_PAGE_SIZE = 10;
