import { HelloCdkStack } from "./hello-cdk-stack";
import { Stage, Construct, StageProps, CfnOutput } from "@aws-cdk/core";

export class WorkshopPipelineStage extends Stage {
  public readonly stageName: string;
  public readonly hcEndpoint: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    this.stageName = "WorkshopStage";

    const service = new HelloCdkStack(this, "WebService");

    this.hcEndpoint = service.hcEndpoint;
  }
}
