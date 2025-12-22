import { Grid } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

import { QuizCard } from '@/components/QuizCard'
import { QuizCarousel } from '@/components/QuizCarousel'

export const Route = createFileRoute('/__auth/')({
  component: DashboardPage,
})

function DashboardPage() {
  const quizItems = [
    {
      imageUrl: 'https://picsum.photos/400/300',
      title: 'Sample Quiz 1',
      tags: ['tag1', 'tag2'],
    },
    {
      imageUrl: 'https://picsum.photos/401/300',
      title: 'Sample Quiz 2',
      tags: ['tag3', 'tag4'],
    },
    {
      imageUrl: 'https://picsum.photos/402/300',
      title: 'Sample Quiz 3',
      tags: ['tag5', 'tag6'],
    },
    {
      imageUrl: 'https://picsum.photos/403/300',
      title: 'Sample Quiz 4',
      tags: ['tag7', 'tag8'],
    },
  ]

  return (
    <section className="grid gap-2 p-2">
      <QuizCarousel items={quizItems} title="Recent Quizes" />
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <QuizCard imageUrl="https://picsum.photos/200/300" title="Random title" />
      </Grid>
    </section>
  )
}
