import React from "react";
import { Button } from "@/ui/components/buttons";
import { useAtom } from "jotai";
import { cryptoTypeAtom, currentStepAtom, feesAtom, fiatTypeAtom, fiatValueAtom } from "@/ui/components/wyre-pay/state";
import { MotionStack } from "@/ui/components/MotionStack";
import { Text } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import { Summary } from "@/ui/components/wyre-pay/Summary";
import * as R from "ramda";

export default function SuccessStep() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [fiatValue] = useAtom(fiatValueAtom);
  const [cryptoType] = useAtom(cryptoTypeAtom);
  const [fiatType] = useAtom(fiatTypeAtom);
  const [fees] = useAtom(feesAtom);

  let isFiatInputEmpty = fiatValue === 0 || R.isEmpty(fiatValue);

  return (
    <MotionStack w={"100%"} align={"center"} spacing={12} px={4} pb={10} overflow={"auto"}
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
      <Text fontFamily={"heading"} fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>Transaction success!</Text>
      <Lottie
        animationData={require("@/public/animations/success")}
        play
        loop={false}
        style={{ width: 150, height: 150 }}
      />
      <Summary fiatValue={fiatValue} cryptoType={cryptoType} fiatType={fiatType} fees={fees}
               isFiatInputEmpty={isFiatInputEmpty} />
      <MotionStack w={"100%"} opacity={0} animate={{ opacity: 1 }} transition={{ delay: 1 }} spacing={4}>
        <Button size={"xl"} w={"100%"} variant={"alt"}>Return to home</Button>
        <Button size={"xl"} w={"100%"} onClick={() => setCurrentStep(1)}>Make another payment</Button>
      </MotionStack>
    </MotionStack>
  );
}
