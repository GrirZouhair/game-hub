import { Stack, HStack, SkeletonCircle, SkeletonText, Skeleton } from "@chakra-ui/react"

interface Props{
    key:number
}

const GameCardSkeleton = ({key}: Props) => {
  return (
    // for image skeleton
    <Stack key={key}>
        <HStack  width="full">
            <SkeletonCircle size="10" />
            <SkeletonText />
        </HStack>
        <Skeleton height="200px" borderRadius="md"  />
    </Stack>
  )
}

export default GameCardSkeleton
