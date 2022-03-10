import {
  objectType,
} from 'nexus'
import prisma from '../../../lib/prisma'

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.nonNull.int('id')
    t.string('bio')
    t.field('user', {
      type: 'User',
      resolve: (parent) => {
        return prisma.profile
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .user()
      },
    })
  },
})