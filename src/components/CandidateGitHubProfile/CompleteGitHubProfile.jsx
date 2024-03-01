export const CompleteGitHubProfile = (props) => {

    return (
      <>
        <img className="rounded-full my-5 mx-auto" src={props.avatar}></img>
        <h3 className="mt-5 font-bold sm:text-2xl">{props.login}</h3>
        <p>{props.id}</p>
        <p>Repos Link: <a href={props.repos}>{props.repos}</a></p>
        <p>Followers: {props.followers} Following: {props.following}</p>
      </>
    )
  }





