import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type StageWhereInput = {
  description?: StringNullableFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: IntNullableFilter;
  room?: RoomWhereUniqueInput;
  stageOrder?: IntNullableFilter;
};
