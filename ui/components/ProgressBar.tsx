import { Box } from "@chakra-ui/react";
import React from "react";
import { useAtom } from "jotai";
import { currentStepAtom } from "./wyre-pay/state";
import * as R from "ramda";

export const ProgressBar = ({ stepMax }: { stepMax: number }) => {
  const [currentStep] = useAtom(currentStepAtom);

  let complete = R.equals(currentStep / stepMax, 1);

  return (
    <Box w={"100%"} h={2} position={"relative"}>
      <Box bg={"gray.100"} w={"100%"} h={"100%"} />
      <Box bg={"blue.400"} transition={"all 300ms ease"} w={complete ? "100%" : currentStep / stepMax} h={"100%"}
           position={"absolute"} top={0} borderTopRightRadius={complete ? 0 : 4}
           borderBottomRightRadius={complete ? 0 : 4} />
    </Box>
  );
};
