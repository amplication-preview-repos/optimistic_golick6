/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ColumnWhereUniqueInput } from "../../column/base/ColumnWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ColumnUpdateManyWithoutRoomsInput {
  @Field(() => [ColumnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ColumnWhereUniqueInput],
  })
  connect?: Array<ColumnWhereUniqueInput>;

  @Field(() => [ColumnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ColumnWhereUniqueInput],
  })
  disconnect?: Array<ColumnWhereUniqueInput>;

  @Field(() => [ColumnWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ColumnWhereUniqueInput],
  })
  set?: Array<ColumnWhereUniqueInput>;
}

export { ColumnUpdateManyWithoutRoomsInput as ColumnUpdateManyWithoutRoomsInput };
