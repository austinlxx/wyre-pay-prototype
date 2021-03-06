import React from 'react';
import {isValidMotionProp, motion} from "framer-motion";
import {forwardRef, Stack} from "@chakra-ui/react";

export const MotionStack = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Stack ref={ref} {...chakraProps} />
  }),
)
