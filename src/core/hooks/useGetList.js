import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetList = (getter, model) => {
  const dispatch = useDispatch();

  const state = useSelector(state => state[model]);

  useEffect(() => {
    dispatch(getter());
  }, [dispatch, getter]);

  const handleLoadMore = () => dispatch(getter(state.page + 1));

  return [state, handleLoadMore];
};

export default useGetList;
