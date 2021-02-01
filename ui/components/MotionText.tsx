import {isValidMotionProp, motion} from "framer-motion";
import {forwardRef, Text} from "@chakra-ui/react";

export const MotionText = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Text ref={ref} {...chakraProps} />
  }),
)
