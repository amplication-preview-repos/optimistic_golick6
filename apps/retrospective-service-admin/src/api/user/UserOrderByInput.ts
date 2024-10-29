import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
