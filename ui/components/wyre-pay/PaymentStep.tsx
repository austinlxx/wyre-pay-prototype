import React from "react";
import { Button, IconButton } from "@/ui/components/buttons";
import { useAtom } from "jotai";
import { currentStepAtom } from "@/ui/components/wyre-pay/state";
import { MotionStack } from "@/ui/components/MotionStack";
import { Box, FormControl, FormLabel, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { LeftArrowIcon } from "@/ui/icons";
import { Input, Select } from "@/ui/components/inputs";

export default function PaymentStep() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

  return (
    <>
      <IconButton position={"absolute"} size={"icon"} variant={"outline"} aria-label={"Go back"}
                  icon={<LeftArrowIcon boxSize={6} />} top={8} left={4}
                  onClick={() => setCurrentStep(currentStep - 1)} />
      <MotionStack w={"100%"} align={"center"} spacing={12} px={4} pb={10} overflow={"auto"}
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
        <Box textAlign={"center"}>
          <Text fontFamily={"heading"} fontSize={"3xl"} fontWeight={"bold"}>Enter payment information</Text>
          <Text fontSize={"lg"} color={"gray.500"}>Enter your personal information as it appears on your bank
            account</Text>
        </Box>
        <FormControl id={"card-info"} isRequired>
          <FormLabel fontFamily={"heading"} fontWeight={"semibold"}>Card information</FormLabel>
          <Stack w={"100%"} spacing={4}>
            <SimpleGrid columns={2} spacing={4}>
              <Input placeholder={"First name"} />
              <Input placeholder={"Last name"} />
            </SimpleGrid>
            <Input placeholder={"Card number"} />
            <SimpleGrid columns={2} spacing={4}>
              <Input placeholder={"Expiration"} />
              <Input placeholder={"CVV"} type={"number"} />
            </SimpleGrid>
          </Stack>
        </FormControl>
        <FormControl id={"billing-address"} isRequired>
          <FormLabel fontFamily={"heading"} fontWeight={"semibold"}>Billing address</FormLabel>
          <Stack w={"100%"} spacing={4}>
            <SimpleGrid columns={2} spacing={4}>
              <Select placeholder={"Country"} iconColor={"gray.400"}>
                <option>United States</option>
                <option>Canada</option>
              </Select>
              <Select placeholder={"State"} iconColor={"gray.400"}>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>American Samoa</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
              </Select>
            </SimpleGrid>
            <Input placeholder={"Address"} />
            <SimpleGrid columns={2} spacing={4}>
              <Input placeholder={"Postal / ZIP code"} type={"number"}/>
              <Input placeholder={"City"} />
            </SimpleGrid>
          </Stack>
        </FormControl>
        <FormControl id={"contact"} isRequired>
          <FormLabel fontFamily={"heading"} fontWeight={"semibold"}>Contact information</FormLabel>
          <Stack w={"100%"} spacing={4}>
            <Input placeholder={"E-mail address"} />
            <Input placeholder={"Phone number"} type={"number"}/>
          </Stack>
        </FormControl>
        <Button size={"xl"} w={"100%"} onClick={() => setCurrentStep(currentStep + 1)}>Submit</Button>
      </MotionStack>
    </>
  );
}
