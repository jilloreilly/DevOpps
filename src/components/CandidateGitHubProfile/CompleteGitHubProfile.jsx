export const CompleteGitHubProfile = (props) => {

    return (
      <>
        <img  target="_blank" className="rounded-full my-5 mx-auto" src={props.avatar}></img>
        <a target="_blank" href={props.url}><h3 className="mt-5 font-bold sm:text-2xl">{props.login}</h3></a>
        <p>{props.id}</p>
        <p>Repos Link: <a href={props.repos}>{props.repos}</a></p>
        <p>Followers: {props.followers} Following: {props.following}</p>
      </>
    )
  }





