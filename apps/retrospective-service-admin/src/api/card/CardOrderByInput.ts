import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  author?: SortOrder;
  columnId?: SortOrder;
  createdAt?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  voters?: SortOrder;
  votes?: SortOrder;
};
