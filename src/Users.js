import React from 'react';

const Users = ({ user }) => {
  // console.log(' id: ', user.id);
  return (
    <div className="card-detail">
      <img src={user.picture.large} />
      <h3>
        {user.name.first}
        {user.name.last}
      </h3>
    </div>
  );
};

export default Users;
