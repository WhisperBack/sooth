import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Geist, Geist_Mono } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], weight: ['400', '700'] });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const [showSubline, setShowSubline] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const sublineTimer = setTimeout(() => setShowSubline(true), 1000);
    const scrollTimer = setTimeout(() => setShowScrollIndicator(true), 2500);
    return () => {
      clearTimeout(sublineTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className={`container ${geist.className}`}>
      <section className="section section-01">
        <motion.h1
          className="title"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          Sooth
        </motion.h1>

        {showSubline && (
          <motion.p
            className="subline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Everything you’ve been holding in — let it breathe here.
          </motion.p>
        )}

        {showScrollIndicator && (
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span>↓</span>
          </motion.div>
        )}
      </section>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: radial-gradient(ellipse at bottom, #0b0f2a, #050610);
          color: #e0f2ff;
          overflow: hidden;
          position: relative;
          padding: 0 1rem;
        }

        .section-01 {
          text-align: center;
        }

        .title {
          font-size: 4rem;
          font-weight: 700;
          color: #c9e5ff;
          text-shadow: 0 0 10px rgba(200, 230, 255, 0.6);
          animation: pulse 6s ease-in-out infinite;
        }

        .subline {
          margin-top: 1.5rem;
          font-size: 1.5rem;
          color: #b2d4f7;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .scroll-indicator {
          margin-top: 3rem;
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
          color: #94c2f5;
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}