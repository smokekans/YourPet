import React from 'react';

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
  return (
    <>
      <div>
        <a href={site} target="_blank" rel="noreferrer">
          {title}
        </a>
        <div>
          <div>
            <img alt={title} src={avatar} />
          </div>
          <div>
            <p>Time:</p>
            <p>
              {time[0] ? (
                <p>
                  {time[0].from} - {time[0].to}
                </p>
              ) : (
                <p>day and night</p>
              )}
            </p>
            <p>Address:</p>
            <a href={addresssite} target="_blank" rel="noreferrer">
              {address}
            </a>
            <p>Email:</p>
            <a href="mailto:{email}">{email}</a>
            <p>Phone:</p>
            <a href="tel:{phone}">{phone}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFriendsItem;
