export const BlogHitComponent = function ({ hits }) {
    return (
        <div>
            <h3>
                {hits.title}
            </h3>
            <p>{hits.description}</p>
            <a href={`/blog/${hits.id}`}>Read More</a>
        </div>
    )
}