import {
  Carousel,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

import { QuizCard, QuizCardProps } from '../QuizCard'

type Props = {
  items: Omit<QuizCardProps, 'onClick'>[]
  title: string
}

export const QuizCarousel: React.FC<Props> = ({ title, items }) => {
  const slidesPerPage = useBreakpointValue({ base: 1, lg: 2, xl: 3 })
  const showArrows = slidesPerPage! < items.length

  return (
    <Carousel.Root slideCount={items.length} slidesPerPage={slidesPerPage} gap="3" allowMouseDrag>
      <HStack justify="space-between">
        <Heading color="blue.600" size="xl">{title}</Heading>
        <HStack hidden={!showArrows}>
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="subtle">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <IconButton size="xs" variant="subtle">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </HStack>
      </HStack>
      <Carousel.ItemGroup>
        {items.map((item, index) => (
          <Carousel.Item key={item.title} index={index}>
            <QuizCard {...item} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}
