import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CardCreateInput = {
  author?: string | null;
  column?: ColumnWhereUniqueInput | null;
  guid?: string | null;
  text?: string | null;
  voters?: InputJsonValue;
  votes?: number | null;
};
