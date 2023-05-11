import React, { useState } from 'react';

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
      <div>
        <a href={site} target="_blank" rel="noreferrer">
          {title}
        </a>
        <div>
          <div>
            <img src={avatar} alt={title} />
          </div>
          <div>
            <p>Time:</p>
            <p
              onMouseEnter={() => {
                if (time[0]) {
                  setDisplay('flex');
                }
              }}
            >
              {time[0] ? (
                <p>
                  {timeArr[0].from} - {timeArr[0].to}
                </p>
              ) : (
                <p>day and night</p>
              )}
            </p>
            <div
              onMouseLeave={() => {
                setTimeout(() => {
                  setDisplay('none');
                }, 300);
              }}
              style={{ display: display }}
            >
              <div>
                {timeArr.map((_el, index) => (
                  <p key={index}>{days[index]}</p>
                ))}
              </div>
              <div>
                {timeArr.map((el, index) => (
                  <p key={index}>
                    {el.from} - {el.to}
                  </p>
                ))}
              </div>
            </div>
            <p>Address:</p>
            <a href={addresssite} target="_blank" rel="noreferrer">
              {address}
            </a>
            <p>Email:</p>
            <a href={`mailto:${email}`}>{email}</a>
            <p>Phone:</p>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFriendsItem;
