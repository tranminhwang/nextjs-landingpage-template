import 'server-only';
import { notFound } from 'next/navigation';

const getDictionary = async (locale: string) => {
  try {
    switch (locale) {
      case 'en':
        return (await import('@/dictionaries/en.json')).default;
      case 'vi':
        return (await import('@/dictionaries/vi.json')).default;
      default:
        return (await import('@/dictionaries/vi.json')).default;
    }
  } catch (error) {
    notFound();
  }
};

export default getDictionary;
