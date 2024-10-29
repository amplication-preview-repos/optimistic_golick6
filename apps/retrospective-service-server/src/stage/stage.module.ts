import { Module } from "@nestjs/common";
import { StageModuleBase } from "./base/stage.module.base";
import { StageService } from "./stage.service";
import { StageController } from "./stage.controller";
import { StageResolver } from "./stage.resolver";

@Module({
  imports: [StageModuleBase],
  controllers: [StageController],
  providers: [StageService, StageResolver],
  exports: [StageService],
})
export class StageModule {}
