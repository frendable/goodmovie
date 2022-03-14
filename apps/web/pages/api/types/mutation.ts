import {
  objectType,
} from 'nexus'
import { ReviewMutation, DeleteReviewMutation } from './review';

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    ReviewMutation(t)
    DeleteReviewMutation(t)
  },
})