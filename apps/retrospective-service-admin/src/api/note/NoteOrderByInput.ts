import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  assignee?: SortOrder;
  createdAt?: SortOrder;
  deadline?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
