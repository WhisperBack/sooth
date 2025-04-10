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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#b9d8ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
          overflow: hidden;
          position: relative;
          padding: 0 1rem;
        }

        .ambient-shimmer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.03), transparent 70%),
                      radial-gradient(circle at 60% 40%, rgba(200, 200, 255, 0.04), transparent 70%),
                      radial-gradient(circle at 50% 50%, rgba(255, 220, 255, 0.02), transparent 70%);
          animation: shimmer-bg 40s ease-in-out infinite;
          z-index: 0;
        }

        .section-01 {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 6rem;
          font-weight: 700;
          color: #e0ecff;
          text-shadow:
            0 0 12px rgba(180, 210, 255, 0.4),
            0 0 24px rgba(200, 230, 255, 0.3),
            0 0 40px rgba(220, 240, 255, 0.2);
          animation: pulse 8s ease-in-out infinite;
          line-height: 1.1;
        }

        .subline {
          margin-top: 2.2rem;
          font-size: 2.2rem;
          color: #bcd8ff;
          max-width: 740px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.45;
          animation: sublineGlow 12s ease-in-out infinite;
        }

        .scroll-indicator {
          margin-top: 3.5rem;
          animation: float 4s ease-in-out infinite;
          opacity: 0.8;
        }

        .scroll-indicator.idle-pulse {
          animation: float 4s ease-in-out infinite, shimmerPulse 6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
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

        @keyframes shimmer-bg {
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
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes sublineGlow {
          0%, 100% {
            text-shadow: 0 0 6px rgba(180, 200, 255, 0.15);
          }
          50% {
            text-shadow: 0 0 12px rgba(190, 220, 255, 0.35);
          }
        }
      `}</style>
    </div>
  );
}
