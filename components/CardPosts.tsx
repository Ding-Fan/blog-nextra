import CardPost from "./CardPost";

const CardPosts = () => {
  const posts = [
    {
      author: "Why The Lucky Stiff",
      content: "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.",
      description: null,
    },
    {
      author: "Chuck Palahniuk, Fight Club",
      content:
        <div>
          "Listen, now, you're going to die, Ray-mond K. K. K. Hessel, tonight. You might die in one second or in one hour, you decide. So lie to me. Tell me the first thing off the top of your head. Make something up. I don't give a shit. I have a gun.
          <br />
          <br />
          Finally, you were listening and coming out of the little tragedy in your head.
          <br />
          <br />
          Fill in the blank. What does Raymond Hessel want to be when he grows up?
          <br />
          <br />
          Go home, you said you just wanted to go home, please.
          <br />
          <br />
          No shit, I said. But after that, how did you want to spend your life? If you could do anything in the world.
          <br />
          <br />
          Make something up.
          <br />
          <br />
          You didn't know.
          <br />
          <br />
          Then you're dead right now, I said. I said, now turn your head.
          <br />
          <br />
          Death to commence in ten, in nine, in eight.
          <br />
          <br />
          A vet, you said. You want to be a vet, a veterinarian.
          <br />
          <br />
          You could be in school working your ass off, Raymond Hessel, or you could be dead. You choose. I stuffed your wallet into the back of your jeans. So you really wanted to be an animal doctor. I took the saltwater muzzle of the gun off one cheek and pressed it against another. Is that what you've always wanted to be, Dr. Raymond K. K. K. K. Hessel, a veterinarian?...
          <br />
          <br />
          So, I said, go back to school. If you wake up tomorrow morning, you find a way to get back into school.
          <br />
          <br />
          I have your license.
          <br />
          <br />
          I know who you are. I know where you live. I'm keeping your license, and I'm going to check on you, mister Raymond K. Hessel. In three months, and then six months, and then a year, and if you aren't back in school on your way to being a veterinarian, you will be dead...
          <br />
          <br />
          Raymond K. K. Hessel, your dinner is going to taste better than any meal you've ever eaten, and tomorrow will be the most beautiful day of your life."
        </div>,
      description: null
    },
    {
      author: "Alan Watts",
      content: "The reason you want to be better is the reason why you aren't. We aren't better because we want to be. Because the road to hell is paved with good intentions.",
      description: "The Road to Hell is Paved with Good Intentions"
    },
    {
      author: "来源网络",
      content: "自杀前请想一想，自杀是会下地狱的，而地狱里全是中国人。",
      description: null
    }
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
