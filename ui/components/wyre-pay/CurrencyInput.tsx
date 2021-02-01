import { Flex, Stack, Text } from "@chakra-ui/react";
import { AutoResize, Input } from "@/ui/components/inputs";
import { fakeStore } from "@/pages/api/fakeStore";
import React from "react";

export const CurrencyInput = ({ fiatValue, setFiatValue, cryptoType, fiatType, isFiatInputEmpty }) => (
  <Stack align={"center"}>
    <Flex align={"center"} justify={"flex-start"}>
      <Text fontSize={"6xl"} fontFamily={"heading"} fontWeight={"bold"}
            color={isFiatInputEmpty ? "gray.300" : "black"}>{fiatType.symbol}</Text>
      <Input value={isFiatInputEmpty ? "" : fiatValue} variant={"currency"}
             size={"currency"} placeholder={"0"} type={"number"}
             onChange={(e) => {
               AutoResize(e.target);
               setFiatValue(e.target.value);
             }} />
    </Flex>
    <Text fontWeight={"bold"} color={"blue.400"}>
      ~{isFiatInputEmpty ? "" : Number(fiatValue / fakeStore.rates.btcToUSD).toFixed(8)} {cryptoType.abbr}
    </Text>
  </Stack>
);
