import { Badge, Box, Card, HStack } from '@chakra-ui/react'

export type QuizCardProps = {
  imageUrl: string
  title: string
  tags?: string[]
  onClick?: () => void
}

export const QuizCard: React.FC<QuizCardProps> = ({ imageUrl, title, tags, onClick }) => {
  return (
    <Card.Root
      h={{
        base: 400,
        md: 350,
      }}
      overflow="hidden"
      maxW="2xl"
      bgPos="center"
      bgSize="cover"
      bgImage={'url(' + imageUrl + ')'}
      cursor="pointer"
      borderRadius="xl"
      onClick={onClick}
    >
      <Card.Body>
        <Box
          mt="auto"
          p="10px"
          bg="rgba(0, 0, 0, 0.4)"
          backdropFilter="blur(10px)"
          borderRadius="lg"
          overflow="hidden"
        >
          <Card.Title
            fontSize="sm"
            color="white"
            fontWeight="normal"
            lineClamp={2}
          >
            {title}
          </Card.Title>
        </Box>

        <HStack position="absolute" top="3" left="3">
          {tags?.map((tag, index) => (
            <Badge key={index} colorScheme="teal">
              {tag}
            </Badge>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}
