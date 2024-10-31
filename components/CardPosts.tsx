import { Quote } from "../data";
import CardPost from "./CardPost";

interface Props {
  data: Quote[]
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
