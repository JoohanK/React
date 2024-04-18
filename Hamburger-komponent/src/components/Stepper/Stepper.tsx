import { useState } from "react";
import "./Stepper.scss"


type StepType = "start" | "midle" | "finish";

export type Step = {
  title: string;
  content?: string;
};

export type StepperProps = {
  startStep: Step;
  midleStep: Step;
  finishStep: Step;
};

const Stepper = ({ startStep, midleStep, finishStep }: StepperProps) => {
  const [step, setStep] = useState<StepType>("start");

  const handleSteps = () => {
    if (step === "start") {
      setStep("midle");
    } else if (step === "midle") {
      setStep("finish");
    }
  };

  const handleStepStyle = (currentStep: StepType) => {
    switch (currentStep) {
      case "start":
        return step === "start" ? " start-stepper active " : "not-active";

      case "midle":
        return step === "midle" ? " midle-stepper active " : "not-active";

      case "finish":
        return step === "finish" ? " finish-stepper active " : "not-active";

      default:
        return "";
    }
  };

  return (
    <div className="stepper-container">
      <div className="container">
        <div className="stepper">
          <p className="content">{startStep.content}</p>
          <div className={`all ${handleStepStyle("start")}`}>
            <p>{startStep.title}</p>
          </div>
          <p className="content">{midleStep.content}</p>
          <div className={`all ${handleStepStyle("midle")}`}>
            <p>{midleStep.title}</p>
          </div>
          <p className="content">{finishStep.content}</p>
          <div className={`all ${handleStepStyle("finish")}`}>
            <p>{finishStep.title}</p>
          </div>
        </div>
        <div className="btn-container">
          {step && (
            <button className="btn" onClick={handleSteps}>
              Click next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Stepper;
