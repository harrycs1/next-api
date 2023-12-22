import DeleteGymieButton from "./deletePost";

export default function Post({ id, title, content, authorName }) {
    return (
        <div className="border rounded-lg px-4 py-4">
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <DeleteGymieButton postId={id}/>
        </div>
    )
}