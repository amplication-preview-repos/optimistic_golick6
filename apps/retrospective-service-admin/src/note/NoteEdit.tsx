import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assignee" source="assignee" />
        <DateTimeInput label="deadline" source="deadline" />
        <TextInput label="guid" source="guid" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
