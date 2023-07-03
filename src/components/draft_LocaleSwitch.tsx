// 'use client';

// import classnames from 'classnames';
// import { useRouter } from 'next/navigation';
// import { useLocale } from 'next-intl';
// import { usePathname } from 'next-intl/client';
// import { ChangeEvent, useTransition } from 'react';

// export default function LocaleSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const locale = useLocale();
//   const router = useRouter();
//   const pathname = usePathname();

//   const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     startTransition(() => {
//       router.replace(`/${event.target.value}${pathname}`);
//     });
//   };

//   return (
//     <label
//       className={classnames(
//         'relative text-gray-400',
//         isPending && 'transition-opacity [&:disabled]:opacity-30',
//       )}>
//       <p className="sr-only">A</p>
//       <select
//         className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
//         defaultValue={locale}
//         disabled={isPending}
//         onChange={onSelectChange}>
//         {['vi', 'en'].map((cur) => (
//           <option key={cur} value={cur}>
//             {cur}
//           </option>
//         ))}
//       </select>
//       <span className="pointer-events-none absolute top-[8px] right-2">⌄</span>
//     </label>
//   );
// }
