import React, { useState } from 'react';
import styles from './styles';
import { Card, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

const OurFriendsItem = ({
  avatar,
  title,
  site,
  addresssite,
  time,
  address,
  email,
  phone,
}) => {
  const [display, setDisplay] = useState('none');

  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const timeArr = time
    .filter(el => el.isOpen !== false)
    .map((el, index) => el.isOpen && { day: days[index], ...el });

  return (
    <>
      <Card sx={styles.item}>
        <Link
          variant="h3"
          sx={styles.title}
          href={site}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </Link>
        <Box sx={styles.box}>
          <Box>
            <Box component="img" sx={styles.img} src={avatar} alt={title} />
          </Box>
          <Box
            onMouseLeave={() => {
              setTimeout(() => {
                setDisplay('none');
              }, 300);
            }}
            sx={styles.relative}
          >
            <Box
              onMouseEnter={() => {
                if (time[0]) {
                  setDisplay('flex');
                }
              }}
            >
              <Box sx={styles.boxGroup}>
                <Typography sx={styles.subtitle} variant="body1">
                  Time:
                </Typography>
                {time[0] ? (
                  <Typography sx={styles.text}>
                    {timeArr[0].from} - {timeArr[0].to}
                  </Typography>
                ) : (
                  <Typography sx={styles.text}>day and night</Typography>
                )}
              </Box>
            </Box>
            <Box sx={styles.popBox} style={{ display: display }}>
              <Box>
                {timeArr.map((_el, index) => (
                  <Typography sx={styles.textPop} key={index}>
                    {days[index]}
                  </Typography>
                ))}
              </Box>
              <Box>
                {timeArr.map((el, index) => (
                  <Typography sx={styles.textPop} key={index}>
                    {el.from}- {el.to}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box sx={styles.boxGroup}>
              <Typography sx={styles.subtitle}>Address:</Typography>
              <Link
                sx={styles.text}
                href={addresssite}
                target="_blank"
                rel="noreferrer"
              >
                {address}
              </Link>
            </Box>
            <Box sx={styles.boxGroup}>
              <Typography sx={styles.subtitle}>Email:</Typography>
              <Link sx={styles.text} href={`mailto:${email}`}>
                {email}
              </Link>
            </Box>
            <Box sx={styles.boxGroup}>
              <Typography sx={styles.subtitle}>Phone:</Typography>
              <Link sx={styles.text} href={`tel:${phone}`}>
                {phone}
              </Link>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default OurFriendsItem;
