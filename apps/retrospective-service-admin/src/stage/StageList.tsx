import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const StageList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Stages"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="position" source="position" />
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="stageOrder" source="stageOrder" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
