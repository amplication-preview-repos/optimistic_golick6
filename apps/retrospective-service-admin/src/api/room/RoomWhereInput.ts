import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StageListRelationFilter } from "../stage/StageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RoomWhereInput = {
  columns?: ColumnListRelationFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  stages?: StageListRelationFilter;
  users?: JsonFilter;
};
