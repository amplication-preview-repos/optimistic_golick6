import * as graphql from "@nestjs/graphql";
import { StageResolverBase } from "./base/stage.resolver.base";
import { Stage } from "./base/Stage";
import { StageService } from "./stage.service";

@graphql.Resolver(() => Stage)
export class StageResolver extends StageResolverBase {
  constructor(protected readonly service: StageService) {
    super(service);
  }
}
