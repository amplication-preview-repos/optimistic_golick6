import { Note as TNote } from "../api/note/Note";

export const NOTE_TITLE_FIELD = "assignee";

export const NoteTitle = (record: TNote): string => {
  return record.assignee?.toString() || String(record.id);
};
