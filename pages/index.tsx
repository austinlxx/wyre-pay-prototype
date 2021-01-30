import Head from "next/head";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AutoResize, Input } from "@/ui/components/inputs";
import * as R from "ramda";
import { fakeStore } from "./api/fakeStore";
import { RightArrowIcon } from "@/ui/icons";
import { CryptoSelect } from "@/ui/components/wyre-pay/CryptoSelect";

const CurrencyInput = ({ fiatValue, setFiatValue }) => (
  <Stack align={"center"}>
    <Flex align={"center"} justify={"flex-start"}>
      <Text fontSize={"5xl"} fontFamily={"heading"} fontWeight={"bold"}
            color={R.isNil(fiatValue) ? "gray.300" : "black"}>$</Text>
      <Input value={R.isNil(fiatValue) ? "" : fiatValue} variant={"currency"}
             size={"currency"} placeholder={"0"} type={"number"}
             onChange={(e) => {
               AutoResize(e.target);
               setFiatValue(e.target.value);
             }} />
    </Flex>
    <Text fontWeight={"bold"} color={"blue.400"}>
      ~{Number(fiatValue / fakeStore.rates.btcToUSD).toFixed(8)} BTC
    </Text>
  </Stack>
);

const ProgressBar = ({ step, stepMax }) => (
  <Box w={"100%"} h={2} position={"relative"}>
    <Box bg={"gray.100"} w={"100%"} h={"100%"} />
    <Box bg={"blue.400"} w={step / stepMax} h={"100%"} position={"absolute"} top={0} borderTopRightRadius={4}
         borderBottomRightRadius={4} />
  </Box>
);

export default function WyrePay() {
  const [step, setStep] = useState(1);
  const [fiatValue, setFiatValue] = useState(0);
  const [cryptoType, setCryptoType] = useState('BTC');
  const [fiatType, setFiatType] = useState('USD');

  let stepMax = 3;

  return (
    <Box>
      <Head>
        <title>Austin Lee - pay.sendwyre.com</title>
      </Head>
      <ProgressBar step={step} stepMax={stepMax} />
      <Grid templateColumns={"1fr 400px 1fr"} mt={20}>
        <Box />
        <Stack w={"100%"} align={"center"} spacing={8}>
          <CurrencyInput fiatValue={fiatValue} setFiatValue={setFiatValue} />
          <Stack direction={"row"}>
            <CryptoSelect cryptoType={cryptoType} setCryptoType={setCryptoType}/>
            <RightArrowIcon boxSize={8} color={"gray.300"} />
          </Stack>
        </Stack>
        <Box />
      </Grid>
    </Box>
  );
}
