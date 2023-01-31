// InfiniteScroll.js

import React from 'react';
import { useInfiniteQuery } from 'react-query';
import Users from './Users';

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10`
  );
  return res.json();
};

const InfiniteScroll = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(['colors'], fetchUsers, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.info.page + 1;
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleScroll = (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      //your code here
      window.removeEventListener('scroll', handleScroll);
      !isFetching && fetchNextPage();
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return (
    <div className="container" style={{}}>
      <h2>Infinite Scroll View</h2>
      <div className="card" onScroll={handleScroll}>
        {data.pages.map((page) =>
          page.results.map((user) => (
            <Users key={'ABC' + user.id} user={user} />
          ))
        )}
      </div>
      {/* <div className="btn-container">
        <button onClick={fetchNextPage}>Load More</button>
      </div> */}
      <div>{isFetching ? 'Fetching...' : null}</div>
    </div>
  );
};

export default InfiniteScroll;
