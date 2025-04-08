'use client';

import Section01_Hero from '@/components/Section01_Hero';
import Section02_Demo from '@/components/Section02_Demo';
import Section03_Features from '@/components/Section03_Features';
import Section04_Story from '@/components/Section04_Story';
import Section05_Footer from '@/components/Section05_Footer';

export default function Home() {
  return (
    <main>
      <Section01_Hero />
      <Section02_Demo />
      <Section03_Features />
      <Section04_Story />
      <Section05_Footer />
    </main>
  );
}
