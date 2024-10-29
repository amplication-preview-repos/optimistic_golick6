import { ColumnUpdateManyWithoutRoomsInput } from "./ColumnUpdateManyWithoutRoomsInput";
import { StageUpdateManyWithoutRoomsInput } from "./StageUpdateManyWithoutRoomsInput";
import { InputJsonValue } from "../../types";

export type RoomUpdateInput = {
  columns?: ColumnUpdateManyWithoutRoomsInput;
  guid?: string | null;
  name?: string | null;
  stages?: StageUpdateManyWithoutRoomsInput;
  users?: InputJsonValue;
};
