import { Grid } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

import { QuizCard } from '@/components/QuizCard'

export const Route = createFileRoute('/__auth/')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <section className="grid gap-2 p-2">
      <p>You are currently on the dashboard route.</p>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <QuizCard imageUrl="https://picsum.photos/200/300" title="Random title" />
      </Grid>
    </section>
  )
}
