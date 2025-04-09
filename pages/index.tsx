import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';


const geist = Geist({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-geist-mono' });

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    const idleTimer = setTimeout(() => setShowScrollCue(true), 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sooth</title>
        <meta name="description" content="Sooth — a soul-first voice companion" />
      </Head>

      <main className={`${geist.variable} ${geistMono.variable}`}>
        <section className="hero-section">
          <div className="content">
            <h1 className="title">Sooth</h1>
            {visible && <p className="subline">Everything you’ve been holding in — let it breathe here.</p>}
          </div>

          <div className={`scroll-indicator ${showScrollCue ? 'show' : ''}`}>
            <div className="arrow">↓</div>
            <div className="shimmer" />
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          background: linear-gradient(180deg, #0d0b1f 0%, #1a1333 50%, #121212 100%);
          overflow: hidden;
        }

        .title {
          font-size: 5rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          animation: pulse 4s infinite ease-in-out;
        }

        .subline {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 1rem;
          opacity: 0;
          animation: fadeIn 2s ease-in forwards;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .scroll-indicator.show {
          opacity: 1;
        }

        .arrow {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.6);
          animation: bounce 2.5s infinite;
        }

        .shimmer {
          width: 2px;
          height: 60px;
          background: linear-gradient(to top, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
          margin-top: 0.5rem;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.025);
            opacity: 0.85;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        @keyframes shimmer {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
      `}</style>
    </>
  );
}