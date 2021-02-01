import React, { useState } from "react";
import { FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { CurrencyInput } from "@/ui/components/wyre-pay/CurrencyInput";
import { FiatSelect } from "@/ui/components/wyre-pay/FiatSelect";
import { RightArrowIcon } from "@/ui/icons";
import { CryptoSelect } from "@/ui/components/wyre-pay/CryptoSelect";
import { Checkbox, Input, Select } from "@/ui/components/inputs";
import { Summary } from "@/ui/components/wyre-pay/Summary";
import { Button } from "@/ui/components/buttons";
import * as R from "ramda";
import { useAtom } from "jotai";
import {
  cryptoTypeAtom,
  currentStepAtom,
  feesAtom,
  fiatTypeAtom,
  fiatValueAtom,
  paymentMethodAtom
} from "@/ui/components/wyre-pay/state";
import { MotionStack } from "@/ui/components/MotionStack";
import { MotionText } from "@/ui/components/MotionText";

export default function CurrencyStep() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [paymentMethod, setPaymentMethod] = useAtom(paymentMethodAtom);
  const [fiatValue, setFiatValue] = useAtom(fiatValueAtom);
  const [cryptoType, setCryptoType] = useAtom(cryptoTypeAtom);
  const [fiatType, setFiatType] = useAtom(fiatTypeAtom);
  const [fees] = useAtom(feesAtom);

  const [isAuthorized, setIsAuthorized] = useState(false);

  let isFiatInputEmpty = fiatValue === 0 || R.isEmpty(fiatValue);

  return (
    <MotionStack w={"100%"} align={"center"} spacing={12} px={4} pb={10} overflow={"auto"} layout
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <CurrencyInput fiatValue={fiatValue} setFiatValue={setFiatValue} cryptoType={cryptoType}
                     fiatType={fiatType} isFiatInputEmpty={isFiatInputEmpty} />
      <Stack direction={"row"} align={"center"}>
        <FiatSelect fiatType={fiatType} setFiatType={setFiatType} />
        <RightArrowIcon boxSize={8} color={"gray.300"} />
        <CryptoSelect cryptoType={cryptoType} setCryptoType={setCryptoType} />
      </Stack>
      <Stack spacing={8} w={"100%"}>
        <FormControl id={"crypto-address"} isRequired>
          <FormLabel fontFamily={"heading"} fontWeight={"semibold"}>{cryptoType.abbr} address</FormLabel>
          <Input placeholder={`Enter your ${cryptoType.name} address...`} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontFamily={"heading"} fontWeight={"semibold"}>Payment method</FormLabel>
          <Select placeholder={"Select a payment method..."} iconColor={"gray.400"}
                  onChange={(e) => setPaymentMethod(e.target.selectedOptions[0].value)}>
            <option>Apple Pay</option>
            <option>Card payments</option>
          </Select>
          {R.equals("Apple Pay", paymentMethod) &&
          <MotionText mt={2} fontSize={"sm"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      color={"red.400"}>Apple Pay is not currently supported, sorry!</MotionText>
          }
        </FormControl>
      </Stack>
      <Summary fiatValue={fiatValue} cryptoType={cryptoType} fiatType={fiatType} fees={fees}
               isFiatInputEmpty={isFiatInputEmpty} />
      <Checkbox onChange={(e) => setIsAuthorized(e.target.checked)}>
        I authorize Wyre to debit my account indicated for the amount above on today’s date, and I agree to Wyre's
        terms.
      </Checkbox>
      <Button isDisabled={!R.and(isAuthorized, R.equals("Card payments", paymentMethod))} size={"xl"} w={"100%"}
              onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
    </MotionStack>
  );
}
