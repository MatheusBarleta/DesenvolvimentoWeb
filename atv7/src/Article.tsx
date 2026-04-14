function Article({ title, date, content, imageSrc, imageCaption }) {
  return (
    <article>
      <h2>{title}</h2>
      {/* Exibindo a data dinamicamente */}
      <time dateTime={date}>{date}</time>
      
      {/* Renderizando os parágrafos de conteúdo dinamicamente */}
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      
      <figure>
        <img src={imageSrc} alt="paisagem" />
        <figcaption>{imageCaption}</figcaption>
      </figure>
    </article>
  );
}

export default Article;