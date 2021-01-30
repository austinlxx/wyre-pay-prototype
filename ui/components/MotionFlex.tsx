/** @jsx jsx */
import React from 'react';
import {isValidMotionProp, motion} from "framer-motion";
import {Flex, forwardRef} from "@chakra-ui/react";
import {jsx} from "@emotion/react";

export const MotionFlex = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Flex ref={ref} {...chakraProps} />
  }),
)
