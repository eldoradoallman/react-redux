import React from 'react';
import { Link } from 'react-router-dom';

const LatestNewsItemComponent = ({
    loggedIn,
    user,
    article,
    addArticle,
    removeArticle,
    cancelToken
  }) => (
  <div className="col-100 col-featured-news">
    <div className="latest-news-box">
      <Link to={article.url} className="latest-news-image" title={article.title}>
        <img src={article.image.size.medium} alt={article.image.caption} />
      </Link>
      <div className="latest-news-summary">
        <Link to={article.url} className="title-latest-news" title={article.title}>{article.title}</Link>
        <p className="article-summary">{article.summary.substring(0,140) + '...'}</p>
        <div className="latest-info-writer-box common">
          <p className="writer">Ditulis oleh <Link to={article.writer.url}>{article.writer.name}</Link></p>
          <p>{article.date}</p>
        </div>
        {
          loggedIn &&
          (
            article.isBookmarked ?
              <div className="main-button"
                onClick={() => {
                  const payload = {
                    userID: user.id,
                    articleID: article.id
                  };
                  removeArticle(payload, cancelToken);
                }
              }>Artikel Tersimpan</div>
            :
              <div className="main-button"
                onClick={() => {
                  const payload = {
                    userID: user.id,
                    articleID: article.id
                  };
                  addArticle(payload, cancelToken);
                }
              }>Simpan Artikel</div>
          )
        }
      </div>
    </div>
  </div>
);

export default LatestNewsItemComponent;
