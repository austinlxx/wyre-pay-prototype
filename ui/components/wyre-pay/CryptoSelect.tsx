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
import { cryptoType, fakeStore } from "@/pages/api/fakeStore";

const Crypto = (name, abbr, icon) => (
    <Stack direction={"row"} align={"center"} spacing={4} py={3} px={4} _hover={{ background: "gray.50" }}
           userSelect={"none"} cursor={"pointer"}>
      {icon(8)}
      <Box fontSize={"md"}>
        <Text fontWeight={"bold"} fontFamily={"heading"}>{abbr}</Text>
        <Text fontFamily={"body"}>{name}</Text>
      </Box>
    </Stack>
  );

export function CryptoSelect({
                               cryptoType,
                               setCryptoType
                             }: { cryptoType: cryptoType, setCryptoType: React.Dispatch<React.SetStateAction<cryptoType>> }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMobile] = useMediaQuery(["(min-width: 480px)"])

  const { name, abbr, icon } = cryptoType;
  const allCryptoTypes = fakeStore.cryptoTypes;

  const handleSelection = ({ crypto }) => {
    setCryptoType(crypto);
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
            <DrawerHeader>
              <Text fontFamily={'heading'}>Choose destination</Text>
              <Text fontFamily={'body'} fontSize={'md'} fontWeight={'regular'} color={'gray.400'}>20+ assets supported</Text>
            </DrawerHeader>
            <DrawerBody px={0}>
              {allCryptoTypes.map((crypto) => {
                return (<Box key={crypto.name} _notLast={{ borderBottomWidth: 1, borderColor: "gray.100" }}
                  onClick={() => handleSelection({ crypto })}>{Crypto(crypto.name, crypto.abbr, crypto.icon)}</Box>);
              })}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
