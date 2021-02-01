import React from "react";
import { useAtom } from "jotai";
import { currentStepAtom } from "@/ui/components/wyre-pay/state";
import { MotionStack } from "@/ui/components/MotionStack";
import { Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";

export default function ProcessingStep() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

  setTimeout(
    () => setCurrentStep(currentStep + 1),
    2000
  );

  return (
    <MotionStack w={"100%"} align={"center"} spacing={12} px={4} pb={10} overflow={"auto"}
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
      <Text fontFamily={"heading"} fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>Processing</Text>
      <Lottie
        loop
        animationData={require("@/public/animations/loading")}
        play
        style={{ width: 150, height: 150 }}
      />
    </MotionStack>
  );
}
