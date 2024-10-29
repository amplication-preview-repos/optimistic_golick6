import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  googleId?: StringNullableFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  username?: StringFilter;
};
