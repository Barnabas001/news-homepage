export default function ArticleRow({ number, image, title, text }) {
  return (
    <article className="articleRow">
      <img src={image} alt={title} />

      <div>
        <span className="articleNumber">{number}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </article>
  );
}
