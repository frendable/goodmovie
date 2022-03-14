import { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import gql from 'graphql-tag';
import { useQuery, useMutation } from "@apollo/client"
import Card from '@mui/material/Card';
import { Link } from '@mui/material';

const SubmitReviewMutation = gql`
  mutation SubmitReviewMutation($movieId: Int!, $comment: String!) {
    reviewMutation(movieId: $movieId, comment: $comment) {
      id
      movieId
      comment
      createdDate
    }
  }
`

const DeleteReviewMutation = gql`
  mutation DeleteReviewMutation($reviewId: Int!) {
    deleteReviewMutation(reviewId: $reviewId) {
      id
      movieId
      comment
      createdDate
    }
  }
`

const ReviewQuery = gql`
  query ReviewQuery($movieId: Int!) {
    reviewQuery(movieId: $movieId) {
      id
      movieId
      comment
      createdDate
    }
  }
`

const Commentary = (props) => {
  const movieId = props.id;
  const { data, refetch } = useQuery(ReviewQuery, {
    fetchPolicy: "cache-and-network",
    variables: { movieId },
  })
  const [reviewMutation] = useMutation(SubmitReviewMutation)
  const [deleteReviewMutation] = useMutation(DeleteReviewMutation)
  const commentRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h5" component="h2">
          User Reviews
        </Typography>
        <Divider />
      </div>
      <Stack spacing={1}>
        <TextareaAutosize
          ref={commentRef}
          aria-label="Put your comment here"
          placeholder="Put your comment here"
          minRows={5}
          style={{ width: '100%' }}
        />
        <div>
          <Button color="primary" variant="contained"
            onClick={async e => {
              await reviewMutation({
                variables: {
                  movieId,
                  comment: commentRef.current?.value
                },
              })
              refetch()
              // @ts-ignore
              commentRef.current?.value = ''
            }}
          >
            Submit
          </Button>
        </div>
      </Stack>

      <Stack spacing={1}>
        {data?.reviewQuery.map((review) => {
          return (
            <Card key={review.id} sx={{ p: 1 }}>
              <Stack spacing={1}>
                <Stack spacing={0.5}>
                  <Typography>
                    {(new Date(review.createdDate)).toDateString()}
                  </Typography>
                  <Typography>
                    {review.comment}
                  </Typography>
                </Stack>
                <Link sx={{ cursor: 'pointer' }}
                  onClick={async e => {
                    await deleteReviewMutation({
                      variables: {
                        reviewId: review.id
                      },
                    })
                    refetch()
                  }}
                >
                  Delete
                </Link>
              </Stack>
            </Card>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default Commentary