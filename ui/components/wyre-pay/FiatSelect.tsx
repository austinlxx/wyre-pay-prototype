import { useDisclosure } from "@chakra-ui/hooks";
import React, { useRef } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text, useMediaQuery
} from "@chakra-ui/react";
import { Button } from "../buttons";
import { MenuIcon } from "@/ui/icons";
import { fiatType, fakeStore } from "@/pages/api/fakeStore";

const Fiat = (name, abbr, icon) => (
    <Stack direction={"row"} align={"center"} spacing={4} py={3} px={4} _hover={{ background: "gray.50" }}
           userSelect={"none"} cursor={"pointer"} _notLast={{ borderBottomWidth: 1, borderColor: "gray.100" }}>
      {icon(8)}
      <Box fontSize={"md"}>
        <Text fontWeight={"bold"} fontFamily={"heading"}>{abbr}</Text>
        <Text fontFamily={"body"}>{name}</Text>
      </Box>
    </Stack>
  );

export function FiatSelect({
                               fiatType,
                               setFiatType
                             }: { fiatType: fiatType, setFiatType: React.Dispatch<React.SetStateAction<fiatType>> }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMobile] = useMediaQuery(["(min-width: 480px)"])

  const { name, abbr, icon } = fiatType;
  const allFiatTypes = fakeStore.fiatTypes;

  const handleSelection = ({ fiat }) => {
    setFiatType(fiat);
    onClose();
  };

  return (
    <>
      <Button leftIcon={icon ? icon(6) : <Box boxSize={6} borderRadius={12} bg={"gray.300"} />}
              rightIcon={<MenuIcon boxSize={4} color={"gray.400"} />}
              variant={"currency"} size={"currency"} onClick={onOpen}>{abbr}</Button>
      <Drawer
        isOpen={isOpen}
        placement={isLargerThanMobile ? 'right' : "bottom"}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontFamily={"heading"}>Pay with...</DrawerHeader>
            <DrawerBody px={0}>
              {allFiatTypes.map((fiat) => {
                return (<Box key={fiat.name}
                  onClick={() => handleSelection({ fiat })}>{Fiat(fiat.name, fiat.abbr, fiat.icon)}</Box>);
              })}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
