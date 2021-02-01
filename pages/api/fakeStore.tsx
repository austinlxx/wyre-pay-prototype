import { BTCIcon, USDIcon } from "@/ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

export interface cryptoType {
  name: string;
  abbr: string;
  icon: (x: number) => any;
}

export interface fiatType {
  name: string;
  abbr: string;
  symbol: string;
  icon: (x: number) => any;
}

const cryptoTypes: Array<cryptoType> = [
  {
    name: "Bitcoin",
    abbr: "BTC",
    icon: (x: number) => <BTCIcon boxSize={x} />
  },
  {
    name: "Ethereum",
    abbr: "ETH",
    icon: (x: number) => <Box boxSize={x} borderRadius={16} bg={"gray.300"} />
  },
  {
    name: "Dogecoin",
    abbr: "DOGE",
    icon: (x: number) => <Box boxSize={x} borderRadius={16} bg={"gray.300"} />
  }
];

const fiatTypes: Array<fiatType> = [
  {
    name: "United States Dollar ($)",
    abbr: "USD",
    symbol: "$",
    icon: (x: number) => <USDIcon boxSize={x} />
  },
  {
    name: "Euro (€)",
    abbr: "EUR",
    symbol: "€",
    icon: (x: number) => <Box boxSize={x} borderRadius={16} bg={"gray.300"} />
  },
  {
    name: "British Pound (£)",
    abbr: "GBP",
    symbol: "£",
    icon: (x: number) => <Box boxSize={x} borderRadius={16} bg={"gray.300"} />
  }
];

const rates = {
  btcToUSD: 34238.30
};

const fees = [
  { type: "Transaction", amount: 5.00 },
  { type: "Network", amount: 6.95 }
];

export const fakeStore = {
  rates,
  fees,
  cryptoTypes,
  fiatTypes
};
