'use client';

import { useSelector } from 'react-redux';
import { selectCount } from '@/features/counter';
import { useAppDispatch } from '@/lib/redux-store';
import { increment, decrement, incrementByAmount } from '@/features/counter';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-gray-700 rounded-lg px-4 py-2 text-white"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button
          className="bg-gray-700 rounded-lg px-4 py-2 text-white"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          className="bg-gray-700 rounded-lg px-4 py-2 text-white"
          onClick={() => dispatch(incrementByAmount(5))}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
