/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ColumnListRelationFilter } from "../../column/base/ColumnListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StageListRelationFilter } from "../../stage/base/StageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class RoomWhereInput {
  @ApiProperty({
    required: false,
    type: () => ColumnListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ColumnListRelationFilter)
  @IsOptional()
  @Field(() => ColumnListRelationFilter, {
    nullable: true,
  })
  columns?: ColumnListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  guid?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => StageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StageListRelationFilter)
  @IsOptional()
  @Field(() => StageListRelationFilter, {
    nullable: true,
  })
  stages?: StageListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  users?: JsonFilter;
}

export { RoomWhereInput as RoomWhereInput };
