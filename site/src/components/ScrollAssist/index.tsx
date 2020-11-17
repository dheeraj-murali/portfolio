import React from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import { Flex, IconButton } from "@chakra-ui/react"
import { ScrollAssistProps } from "../../types"

export const ScrollAssist = (props: ScrollAssistProps) => {
  const { leftClickFn, rightClickFn } = props

  return (
    <Flex flex="inline-flex" w="full" justifyContent="space-evenly">
      <IconButton
        aria-label="scroll left"
        onClick={leftClickFn}
        icon={<FaChevronCircleLeft />}
        colorScheme="blue"
        size="lg"
      />
      <IconButton
        aria-label="scroll right"
        onClick={rightClickFn}
        icon={<FaChevronCircleRight />}
        colorScheme="blue"
        size="lg"
      />
    </Flex>
  )
}

export const scrollFn = (
  element: React.MutableRefObject<HTMLDivElement>,
  scrollOffset: number,
  side: "l" | "r"
) => {
  let current = 0

  const scroll = () => {
    if (side === "r") element.current.scrollLeft += 1
    if (side === "l") element.current.scrollLeft -= 1
    current += 1

    if (current < scrollOffset) {
      setTimeout(() => {
        scroll()
      }, 5)
    }
  }

  scroll()
}
