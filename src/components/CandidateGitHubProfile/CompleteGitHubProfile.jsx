export function CompleteGitHubProfile(props) { 


  return (
  <>
    <img src={props.avatar}></img>
    <p>{props.id}</p>
    <p>{props.repose}</p>
      <p>{props.followers}</p>
      </>
)


}

