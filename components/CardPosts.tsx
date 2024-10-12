import CardPost from "./CardPost";

const CardPosts = () => {

  const posts = [
    {
      author: "Why The Lucky Stiff",
      content: "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.",
      description: "Description 1"
    },
  ]


  return (
    <div>
      {
        posts.map((post, index) => <CardPost key={index} post={post} />)
      }
    </div>
  )
}

export default CardPosts;
