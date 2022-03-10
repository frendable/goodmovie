import {
  objectType,
  nonNull,
  stringArg,
  nullable,
} from 'nexus'
import prisma from '../../../lib/prisma'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('post', {
      type: 'Post',
      args: {
        postId: nonNull(stringArg()),
      },
      resolve: async (_, args) => {
        // const test = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=e402ac10a45433e0460901c120d979c3');
        // console.log('FRENDY', await test.json())
        // const test = await prisma.post.findUnique({
        //   where: { id: Number(args.postId) },
        // });
        // console.log('QUERY POST', test)
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
  },
})