import prisma from '../../../lib/prisma'
import { intArg, nonNull, objectType, stringArg } from 'nexus';

export const Review = objectType({
  name: 'Review',
  definition(t) {
    t.int('id')
    t.int('movieId')
    t.string('comment')
    t.date('createdDate')
  }
})

export const ReviewMutation = (t) => {
  t.nullable.field('reviewMutation', {
    type: 'Review',
    args: {
      movieId: nonNull(intArg()),
      comment: nonNull(stringArg()),
    },
    resolve: (_, { movieId, comment }, ctx) => {
      return prisma.review.create({
        data: { movieId, comment, createdDate: new Date() },
      })
    },
  })
}

export const DeleteReviewMutation = (t) => {
  t.nullable.field('deleteReviewMutation', {
    type: 'Review',
    args: {
      reviewId: nonNull(intArg()),
    },
    resolve: (_, { reviewId }, ctx) => {
      return prisma.review.delete({
        where: { id: reviewId },
      })
    },
  })
}

export const ReviewQuery = (t) => {
  t.list.field('reviewQuery', {
    type: 'Review',
    args: {
      movieId: nonNull(intArg()),
    },
    resolve: async (_, { movieId }) => {
      return prisma.review.findMany({
        orderBy: [
          {
            createdDate: 'desc',
          },
        ],
        where: { movieId },
      })
    },
  })
}