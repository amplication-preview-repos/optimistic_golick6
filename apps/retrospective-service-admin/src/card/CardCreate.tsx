import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ColumnTitle } from "../column/ColumnTitle";

export const CardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
