function ContentInfo(props)
{
    return (
        <div className="header">
          <h3>
            {props.title}
          </h3>
          <p> {props.info}</p>
        </div>
    )
}

export default ContentInfo