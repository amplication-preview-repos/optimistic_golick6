import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NoteList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Notes"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assignee" source="assignee" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deadline" source="deadline" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
