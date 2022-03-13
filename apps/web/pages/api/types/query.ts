import {
  objectType,
  nonNull,
  stringArg,
  nullable,
} from 'nexus'
import prisma from '../../../lib/prisma'
import { TrendingQuery, PopularQuery } from './movie'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('post', {
      type: 'Post',
      args: {
        postId: nonNull(stringArg()),
      },
      resolve: async (_, args) => {
        return prisma.post.findUnique({
          where: { id: Number(args.postId) },
        })
      },
    })

    t.field('user', {
      type: 'User',
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_, args) => {
        return prisma.user.findUnique({
          where: { id: Number(args.userId) },
        })
      },
    })

    t.list.field('feed', {
      type: 'Post',
      resolve: (_parent, _args) => {
        return prisma.post.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('drafts', {
      type: 'Post',
      resolve: (_parent, _args, ctx) => {
        return prisma.post.findMany({
          where: { published: false },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: nullable(stringArg()),
      },
      resolve: (_, { searchString }, ctx) => {
        return prisma.post.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        })
      },
    })

    TrendingQuery(t),
    PopularQuery(t)
  },
})