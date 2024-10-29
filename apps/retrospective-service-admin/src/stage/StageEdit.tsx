import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const StageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="guid" source="guid" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="position" source="position" />
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="stageOrder" source="stageOrder" />
      </SimpleForm>
    </Edit>
  );
};
