import "./Post.css";

function Post(props) {
    console.log(props);
    const { title, body } = props;
    return (
        <div className="post">
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
}

export default Post;
