import { Column } from "../column/Column";
import { JsonValue } from "type-fest";

export type Card = {
  author: string | null;
  column?: Column | null;
  createdAt: Date;
  guid: string | null;
  id: string;
  text: string | null;
  updatedAt: Date;
  voters: JsonValue;
  votes: number | null;
};
