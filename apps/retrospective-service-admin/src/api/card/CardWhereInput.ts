import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CardWhereInput = {
  author?: StringNullableFilter;
  column?: ColumnWhereUniqueInput;
  guid?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  voters?: JsonFilter;
  votes?: IntNullableFilter;
};
