import React from 'react';

function News({ news }) {
  let formattedDate = null;
  if (news.date) {
    formattedDate = new Date(news.date).toLocaleDateString('en-GB');
  }

  return (
    <li>
      <div>
        <img
          src={
            news.imgUrl
              ? news.imgUrl
              : 'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
          }
          alt=""
          width="320"
        />
        <h1>{news.title}</h1>
        <p>{news.text}</p>
        <div>
          {formattedDate}
          <a target="_blank" rel="noreferrer" href={news.url}>
            Read more
          </a>
        </div>
      </div>
    </li>
  );
}

export default News;
