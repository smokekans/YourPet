import { Box, Card, Link, Typography } from '@mui/material';
import React from 'react';
import styles from './styles';

function NewsItem({ news }) {
  let formattedDate = null;
  if (news.date) {
    formattedDate = new Date(news.date).toLocaleDateString('en-GB');
  }

  return (
    <>
      <Box sx={styles.item}>
        <Box sx={styles.lineStyle} />
        <Card sx={styles.card}>
          <Box
            component="img"
            sx={styles.img}
            src={
              news.imgUrl
                ? news.imgUrl
                : 'https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png'
            }
            alt=""
          />
          <Box sx={styles.news}>
            <Box sx={styles.description}>
              <Typography sx={styles.title}>{news.title}</Typography>
              <Typography sx={styles.text}>{news.text}</Typography>
            </Box>
            <Box sx={styles.dataAndRead}>
              <Typography sx={styles.dateNews}>{formattedDate}</Typography>

              <Link
                sx={styles.linkNews}
                variant="h3"
                target="_blank"
                rel="noreferrer"
                href={news.url}
              >
                <Typography sx={styles.linkRead}>Read more</Typography>
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default NewsItem;
