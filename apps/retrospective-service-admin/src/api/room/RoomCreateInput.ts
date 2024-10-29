import { ColumnCreateNestedManyWithoutRoomsInput } from "./ColumnCreateNestedManyWithoutRoomsInput";
import { StageCreateNestedManyWithoutRoomsInput } from "./StageCreateNestedManyWithoutRoomsInput";
import { InputJsonValue } from "../../types";

export type RoomCreateInput = {
  columns?: ColumnCreateNestedManyWithoutRoomsInput;
  guid?: string | null;
  name?: string | null;
  stages?: StageCreateNestedManyWithoutRoomsInput;
  users?: InputJsonValue;
};
