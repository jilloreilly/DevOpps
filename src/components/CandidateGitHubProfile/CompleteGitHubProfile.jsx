export const CompleteGitHubProfile = (props) => {

    return (
      <>
        <img className="rounded-full" src={props.avatar}></img>
        <p>{props.id}</p>
        <p>Repos Link: <a href={props.repos}>{props.repos}</a></p>
        <p>Followers: {props.followers}</p>
      </>
    )
  }





