import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ColumnWhereInput = {
  cards?: CardListRelationFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: IntNullableFilter;
  room?: RoomWhereUniqueInput;
};
