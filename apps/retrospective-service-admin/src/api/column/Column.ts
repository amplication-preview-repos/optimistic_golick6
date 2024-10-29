import { Card } from "../card/Card";
import { Room } from "../room/Room";

export type Column = {
  cards?: Array<Card>;
  createdAt: Date;
  guid: string | null;
  id: string;
  name: string | null;
  position: number | null;
  room?: Room | null;
  updatedAt: Date;
};
