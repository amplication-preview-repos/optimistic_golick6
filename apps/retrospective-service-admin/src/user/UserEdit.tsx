import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="googleId" source="googleId" />
        <TextInput label="guid" source="guid" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
