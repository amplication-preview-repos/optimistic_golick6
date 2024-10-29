import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type StageCreateInput = {
  description?: string | null;
  guid?: string | null;
  name?: string | null;
  position?: number | null;
  room?: RoomWhereUniqueInput | null;
  stageOrder?: number | null;
};
