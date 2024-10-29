import { CardCreateNestedManyWithoutColumnsInput } from "./CardCreateNestedManyWithoutColumnsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ColumnCreateInput = {
  cards?: CardCreateNestedManyWithoutColumnsInput;
  guid?: string | null;
  name?: string | null;
  position?: number | null;
  room?: RoomWhereUniqueInput | null;
};
