// 'use client';

// import { useSelector } from 'react-redux';
// import { selectCount } from '@/features/counter';
// import { useAppDispatch } from '@/lib/redux-store';
// import { increment, decrement, incrementByAmount } from '@/features/counter';
// import { useTranslations } from 'next-intl';
// import NavigationLink from './NavigationLink';
// import LocaleSwitcher from './LocaleSwitch';

// const Counter = () => {
//   const count = useSelector(selectCount);
//   const dispatch = useAppDispatch();

//   const t = useTranslations('ExamplePage');

//   return (
//     <div className="w-1/2 mx-auto">
//       <h1 className="text-4xl font-bold">{count}</h1>
//       <LocaleSwitcher />

//       <div className="flex gap-4">
//         <button
//           className="bg-gray-700 rounded-lg px-4 py-2 text-white"
//           onClick={() => dispatch(increment())}>
//           {t('increment')}
//         </button>
//         <button
//           className="bg-gray-700 rounded-lg px-4 py-2 text-white"
//           onClick={() => dispatch(decrement())}>
//           {t('decrement')}
//         </button>
//         <button
//           className="bg-gray-700 rounded-lg px-4 py-2 text-white"
//           onClick={() => dispatch(incrementByAmount(5))}>
//           {t('incrementByAmount')}
//         </button>
//         <NavigationLink href="/">Home</NavigationLink>
//       </div>
//     </div>
//   );
// };

// export default Counter;
