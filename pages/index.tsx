import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Geist, Geist_Mono } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], weight: ['400', '700'] });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const [showSubline, setShowSubline] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const sublineTimer = setTimeout(() => setShowSubline(true), 1000);
    const scrollTimer = setTimeout(() => setShowScrollIndicator(true), 2500);
    const idleTimer = setTimeout(() => setIdle(true), 10000);
    return () => {
      clearTimeout(sublineTimer);
      clearTimeout(scrollTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div className={`container ${geist.className}`}>
      <div className="ambient-shimmer" />

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
            className={`scroll-indicator ${idle ? 'idle-pulse' : ''}`}
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

        .ambient-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 70%, rgba(150, 150, 255, 0.05), transparent),
                      radial-gradient(circle at 70% 30%, rgba(255, 200, 255, 0.05), transparent);
          animation: shimmer 30s ease-in-out infinite;
          z-index: 0;
        }

        .section-01 {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 4rem;
          font-weight: 700;
          color: #dbeaff;
          text-shadow: 0 0 12px rgba(220, 230, 255, 0.6);
          animation: pulse 8s ease-in-out infinite;
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

        .scroll-indicator.idle-pulse {
          animation: float 3s ease-in-out infinite, shimmerPulse 4s ease-in-out infinite;
          color: #b9d8ff;
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

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmerPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
