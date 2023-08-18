import { useState, useCallback } from 'react';

const initialState = {
  offset: 0,
  limit: 10,
  page: 0,
};

const usePaginator = ({ pageSize = 10 } = {}) => {
  const [paginator, setPaginator] = useState({
    ...initialState,
    limit: pageSize,
  });

  const handlePageChange = (event, page) => {
    const offset = paginator.limit * (page + 1) - paginator.limit;
    setPaginator({ offset, limit: paginator.limit, page });
  };

  const reset = useCallback(() => {
    setPaginator(initialState);
  }, []);

  return {
    paginator,
    handlePageChange,
    reset,
  };
};

export default usePaginator;
