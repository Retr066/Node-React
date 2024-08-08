import { useState } from "react";


export const ArticleItem = (article) => {
  const [imageError, setImageError] = useState(false);
  const handleClick = () => {
    window.open(article.url, '_blank', 'noopener,noreferrer')
  }
  const handleError = () => {
    setImageError(true);
  };
  return (
    <article className='article' onClick={handleClick}>
      <picture >
        <img className='article__img' src={imageError ? '../assets/Image-not-found.png' : article.urlToImage} 
        alt={article.title}
        onError={handleError}
        />
      </picture>
      <div className='article__content'>
        <h2 className='article__title'>{article.title}</h2>
        <p className='article__author'>{article.author}</p>
        <p className='article__descripcion'>{article.description}</p>
      </div>
    </article>
  )
}
