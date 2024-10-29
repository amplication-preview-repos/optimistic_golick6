import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ColumnTitle } from "../column/ColumnTitle";
import { StageTitle } from "../stage/StageTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="columns" reference="Column">
          <SelectArrayInput
            optionText={ColumnTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="guid" source="guid" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="stages" reference="Stage">
          <SelectArrayInput
            optionText={StageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
