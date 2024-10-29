import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COLUMN_TITLE_FIELD } from "./ColumnTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="position" source="position" />
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Card" target="columnId" label="Cards">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="author" source="author" />
            <ReferenceField
              label="column"
              source="column.id"
              reference="Column"
            >
              <TextField source={COLUMN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="guid" source="guid" />
            <TextField label="ID" source="id" />
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="voters" source="voters" />
            <TextField label="votes" source="votes" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
