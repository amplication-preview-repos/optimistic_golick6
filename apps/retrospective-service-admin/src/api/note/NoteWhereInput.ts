import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NoteWhereInput = {
  assignee?: StringNullableFilter;
  deadline?: DateTimeNullableFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
