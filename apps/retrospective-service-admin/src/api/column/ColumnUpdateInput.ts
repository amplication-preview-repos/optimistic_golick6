import { CardUpdateManyWithoutColumnsInput } from "./CardUpdateManyWithoutColumnsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ColumnUpdateInput = {
  cards?: CardUpdateManyWithoutColumnsInput;
  guid?: string | null;
  name?: string | null;
  position?: number | null;
  room?: RoomWhereUniqueInput | null;
};
