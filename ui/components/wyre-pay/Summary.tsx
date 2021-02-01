import { Box, Divider, Flex, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import { fakeStore } from "@/pages/api/fakeStore";
import { ExchangeIcon, HelpIcon } from "@/ui/icons";
import * as R from "ramda";

const SummaryField = ({ label, value, isFiatInputEmpty, ...rest }) => (
  <Flex justify={"space-between"} {...rest}>
    <Text fontFamily={"heading"} fontWeight={"medium"}>{label}</Text>
    <Text color={isFiatInputEmpty ? "gray.400" : "black"}>{isFiatInputEmpty ? "----" : value}</Text>
  </Flex>
);

export const Summary = ({ fiatValue, cryptoType, fiatType, fees, isFiatInputEmpty }) => {
  let purchaseTotal = 0;

  if (!isFiatInputEmpty) {
    purchaseTotal = R.add(purchaseTotal, fiatValue);
    fees.map((fee) => purchaseTotal = R.add(purchaseTotal, fee.amount));
  }

  return (
    <Stack bg={"gray.50"} w={"100%"} borderRadius={8} p={6} spacing={4}>
      <SummaryField
        label={
          <Box>
            <Text>Exchange rate</Text>
            {!isFiatInputEmpty && <Text color={"gray.400"} fontSize={"sm"}>as of {moment().fromNow()}</Text>}
          </Box>
        }
        value={
          <Flex direction={"column"} align={"flex-end"}>
            <Text>{R.concat(fiatType.symbol, fakeStore.rates.btcToUSD.toFixed(2))}</Text>
            {!isFiatInputEmpty && <Text color={"gray.400"} fontSize={"sm"}>
              <Flex align={"center"}>
                <ExchangeIcon boxSize={4} mr={1} />
                <Text>1 {cryptoType.abbr}</Text>
              </Flex>
            </Text>}
          </Flex>
        }
        isFiatInputEmpty={isFiatInputEmpty} />
      <Divider />
      {fees.map((fee) => (
        <SummaryField
          label={
            <Link href={"https://support.sendwyre.com/en/articles/3359160-wyre-card-processing-fees"}>
              {R.concat(fee.type, " fee")}
              <HelpIcon ml={1} boxSize={4} mb={"2px"} color={"gray.400"} />
            </Link>}
          key={fee.type}
          value={R.concat(fiatType.symbol, fee.amount.toFixed(2))}
          isFiatInputEmpty={isFiatInputEmpty} />
      ))}
      <Divider />
      <SummaryField
        label={"Purchase total"}
        value={R.concat(fiatType.symbol, Number(purchaseTotal).toFixed(2))}
        isFiatInputEmpty={isFiatInputEmpty} />
    </Stack>
  );
};
