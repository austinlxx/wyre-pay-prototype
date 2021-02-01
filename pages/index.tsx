import React from "react";
import Head from "next/head";
import { useAtom } from "jotai";
import { Box, Grid } from "@chakra-ui/react";
import { ProgressBar } from "@/ui/components/ProgressBar";
import CurrencyStep from "@/ui/components/wyre-pay/CurrencyStep";
import PaymentStep from "@/ui/components/wyre-pay/PaymentStep";
import { currentStepAtom } from "@/ui/components/wyre-pay/state";
import { AnimateSharedLayout } from "framer-motion";
import ProcessingStep from "@/ui/components/wyre-pay/ProcessingStep";
import SuccessStep from "@/ui/components/wyre-pay/SuccessStep";

const stepComponents = [CurrencyStep, PaymentStep, ProcessingStep, SuccessStep];

export default function WyrePay() {
  const [currentStep] = useAtom(currentStepAtom);
  let stepMax = stepComponents.length;

  return (
    <Box h={"100vh"}>
      <Head>
        <title>Austin Lee - pay.sendwyre.com</title>
      </Head>
      <ProgressBar stepMax={stepMax} />
      <Grid templateColumns={"1fr 400px 1fr"} mt={24}>
        <Box />
        <AnimateSharedLayout>
          {React.createElement(stepComponents[currentStep - 1])}
        </AnimateSharedLayout>
        <Box />
      </Grid>
    </Box>
  );
}
