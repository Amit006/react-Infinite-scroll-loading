import React, { useState } from 'react';
import './style.css';
import Pagination from './Pagination';
import InfiniteScroll from './InfiniteScroll';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  const [view, setView] = useState('infiniteScroll');

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Welcome to Random Users</h1>

        <nav className="nav">
          {/* <button onClick={() => setView('pagination')}>Pagination</button> */}
          {/* <button onClick={() => setView('infiniteScroll')}>
            Infinite Scroll
          </button> */}
        </nav>

        {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
      </div>
    </QueryClientProvider>
  );
}
