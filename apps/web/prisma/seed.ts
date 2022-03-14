import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const reviewData: Prisma.ReviewCreateInput[] = [
  {
    movieId: 1,
    comment: 'This movie is awesome',
    createdDate: new Date()
  },
  {
    movieId: 2,
    comment: 'Gorgeous artist',
    createdDate: new Date()
  },
]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    for (const u of reviewData) {
      const review = await prisma.review.create({
        data: u,
      })
      console.log(`Created review with id: ${review.id}`)
    }
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
