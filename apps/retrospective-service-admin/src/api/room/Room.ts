import { Column } from "../column/Column";
import { Stage } from "../stage/Stage";
import { JsonValue } from "type-fest";

export type Room = {
  columns?: Array<Column>;
  createdAt: Date;
  guid: string | null;
  id: string;
  name: string | null;
  stages?: Array<Stage>;
  updatedAt: Date;
  users: JsonValue;
};
