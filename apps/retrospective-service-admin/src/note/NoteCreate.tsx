import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assignee" source="assignee" />
        <DateTimeInput label="deadline" source="deadline" />
        <TextInput label="guid" source="guid" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
