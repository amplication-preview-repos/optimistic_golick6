import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ColumnTitle } from "../column/ColumnTitle";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput source="column.id" reference="Column" label="column">
          <SelectInput optionText={ColumnTitle} />
        </ReferenceInput>
        <TextInput label="guid" source="guid" />
        <TextInput label="text" multiline source="text" />
        <div />
        <NumberInput step={1} label="votes" source="votes" />
      </SimpleForm>
    </Edit>
  );
};
