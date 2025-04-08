'use client';

import Section03_Features from '@/components/Section03_Features';
import Section02_Demo from '@/components/Section02_Demo';
import Section04_Story from '@/components/Section04_Story';
import Section05_Footer from '@/components/Section05_Footer';

export default function Home() {
  return (
    <main>
      <Section03_Features />
      <Section02_Demo />
      <Section04_Story />
      <Section05_Footer />
    </main>
  );
}
