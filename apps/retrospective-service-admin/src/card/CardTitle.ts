import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "author";

export const CardTitle = (record: TCard): string => {
  return record.author?.toString() || String(record.id);
};
