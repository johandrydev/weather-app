import React from 'react';
import Card from '../card';

const users = [
  {
    id: 1,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg'
  },
  {
    id: 2,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg'
  },
  {
    id: 3,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg'
  },
]

const Avatares = () => {
  return (
    <div className="avatares mb-2">
      <span><i className="fas fa-plus"></i>Top Reviews</span>
      {users.map(({ id, img }) => (
        <Card key={id} border="border-xsmall" cssClass="avatar">
          <img src={img} alt="" />
        </Card>
      ))}
      <Card border="border-xsmall" cssClass="avatar plus">
        2<i className="fas fa-plus icon"></i>
      </Card>
    </div>
  );
};

export default Avatares;
