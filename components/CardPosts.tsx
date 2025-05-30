import { Post } from "../data/types";
import CardPost from "./CardPost";

interface Props {
  data: Post[]
}

const CardPosts = ({ data }: Props) => {
  return (
    <div>
      {
        data.map((post, index) => <CardPost className="my-4" key={index} post={post} />)
      }
    </div>
  )
}

export default CardPosts;
