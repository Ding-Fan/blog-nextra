import CardPost, { Post } from "./CardPost";

interface Props {
  data: Post[]
}

const CardPosts = ({ data }: Props) => {
  return (
    <div>
      {
        data.map((post, index) => <CardPost key={index} post={post} />)
      }
    </div>
  )
}

export default CardPosts;
