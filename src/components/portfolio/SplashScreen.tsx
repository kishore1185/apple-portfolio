import { motion } from 'framer-motion';
import { Vortex } from '@/components/ui/vortex';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <Vortex
        backgroundColor="#000000"
        baseHue={220}
        rangeHue={60}
        particleCount={500}
        baseSpeed={0.1}
        rangeSpeed={1.2}
        baseRadius={1}
        rangeRadius={2}
        containerClassName="w-full h-full"
        className="flex items-center justify-center w-full h-full"
      >
        <motion.div
          className="text-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'Orbitron', 'Rajdhani', 'Share Tech Mono', sans-serif",
              textShadow: '0 0 40px rgba(100, 150, 255, 0.5), 0 0 80px rgba(100, 150, 255, 0.3)',
            }}
          >
            Loading the 3D Magic World...
          </h1>
          
          {/* Loading bar */}
          <motion.div 
            className="mt-8 mx-auto w-64 h-1 bg-white/20 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </Vortex>
    </motion.div>
  );
}
