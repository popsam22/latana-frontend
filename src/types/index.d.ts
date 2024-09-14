import { GridColDef } from "@mui/x-data-grid";

declare type CardProp = {
  profit: boolean;
  title: string;
  amount: string;
};

declare type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className: string;
  title: string;
};

declare type TableProps = {
  rows: Object[];
  columns: GridColDef[];
  height: number;
};

declare type SelectedItem = {
  status: "Success" | "Failure";
};

declare type NavbarProp = {
  item: string;
};

declare type SidebarProp = {
  setItem: (value: string) => void;
};
