import { HelloCdkStack } from "./hello-cdk-stack";
import { Stage, Construct, StageProps } from "@aws-cdk/core";

export class WorkshopPipelineStage extends Stage {
  public readonly stageName: string;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    this.stageName = "WorkshopStage";

    new HelloCdkStack(this, "WebService");
  }
}
