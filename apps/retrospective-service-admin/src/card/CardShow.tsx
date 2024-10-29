import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COLUMN_TITLE_FIELD } from "../column/ColumnTitle";

export const CardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <ReferenceField label="column" source="column.id" reference="Column">
          <TextField source={COLUMN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voters" source="voters" />
        <TextField label="votes" source="votes" />
      </SimpleShowLayout>
    </Show>
  );
};
