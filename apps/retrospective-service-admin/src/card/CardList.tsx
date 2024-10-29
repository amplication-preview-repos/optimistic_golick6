import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLUMN_TITLE_FIELD } from "../column/ColumnTitle";

export const CardList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Cards"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="votes" source="votes" />{" "}
      </Datagrid>
    </List>
  );
};
