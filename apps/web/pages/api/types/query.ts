import {
  objectType,
} from 'nexus'
import { TrendingQuery, PopularQuery } from './movie'
import { ReviewQuery } from './review';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    TrendingQuery(t)
    PopularQuery(t)
    ReviewQuery(t)
  },
})