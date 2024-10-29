import { Room } from "../room/Room";

export type Stage = {
  createdAt: Date;
  description: string | null;
  guid: string | null;
  id: string;
  name: string | null;
  position: number | null;
  room?: Room | null;
  stageOrder: number | null;
  updatedAt: Date;
};
