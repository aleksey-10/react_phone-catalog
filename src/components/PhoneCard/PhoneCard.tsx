import React, { FC } from 'react';

interface Props {
  phone: PhonesWithDetails;
}

export const PhoneCard: FC<Props> = ({ phone }) => (
  <div className="card catalog__card">
    <img
      src={`./img/phones/${phone.id}.0.jpg`}
      alt="phone_image"
      className="card__image"
    />
    <h2 className="card__heading">{phone.name}</h2>
    <div className="card__details">
      <div className="card__detail">
        <span>Screen</span>
        <span>{phone.details.display.screenResolution}</span>
      </div>
      <div className="card__detail">
        <span>Capacity</span>
        <span>{phone.details.storage.flash}</span>
      </div>
      <div className="card__detail">
        <span>Ram</span>
        <span>{phone.details.storage.ram}</span>
      </div>
    </div>
    <button type="button" className="card__button-cart">Add to cart</button>
    <button type="button" className="card__button-favourite">
      {/* eslint-disable-next-line max-len */}
      <svg className="icon" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd" d="M3.46671 0.933323C3.59261 0.765453 3.7902 0.666656 4.00004 0.666656H12C12.2099 0.666656 12.4075 0.765453 12.5334 0.933323L14.5334 3.59999C14.6199 3.71539 14.6667 3.85574 14.6667 3.99999V13.3333C14.6667 13.8638 14.456 14.3725 14.0809 14.7475C13.7058 15.1226 13.1971 15.3333 12.6667 15.3333H3.33337C2.80294 15.3333 2.29423 15.1226 1.91916 14.7475C1.54409 14.3725 1.33337 13.8638 1.33337 13.3333V3.99999C1.33337 3.85574 1.38016 3.71539 1.46671 3.59999L3.46671 0.933323ZM4.33337 1.99999L2.66671 4.22221V13.3333C2.66671 13.5101 2.73695 13.6797 2.86197 13.8047C2.98699 13.9298 3.15656 14 3.33337 14H12.6667C12.8435 14 13.0131 13.9298 13.1381 13.8047C13.2631 13.6797 13.3334 13.5101 13.3334 13.3333V4.22221L11.6667 1.99999H4.33337Z" fill="#000000" />
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd" d="M1.33337 4.00001C1.33337 3.63182 1.63185 3.33334 2.00004 3.33334H14C14.3682 3.33334 14.6667 3.63182 14.6667 4.00001C14.6667 4.3682 14.3682 4.66668 14 4.66668H2.00004C1.63185 4.66668 1.33337 4.3682 1.33337 4.00001Z" fill="#000000" />
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd" d="M5.33329 6C5.70148 6 5.99996 6.29848 5.99996 6.66667C5.99996 7.1971 6.21067 7.70581 6.58575 8.08088C6.96082 8.45595 7.46953 8.66667 7.99996 8.66667C8.53039 8.66667 9.0391 8.45595 9.41417 8.08088C9.78925 7.70581 9.99996 7.1971 9.99996 6.66667C9.99996 6.29848 10.2984 6 10.6666 6C11.0348 6 11.3333 6.29848 11.3333 6.66667C11.3333 7.55072 10.9821 8.39857 10.357 9.02369C9.73186 9.64881 8.88401 10 7.99996 10C7.1159 10 6.26806 9.64881 5.64294 9.02369C5.01782 8.39857 4.66663 7.55072 4.66663 6.66667C4.66663 6.29848 4.9651 6 5.33329 6Z" fill="#000000" />
      </svg>
    </button>
  </div>
);
