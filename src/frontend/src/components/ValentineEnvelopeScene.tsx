import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import ValentineMessageCard from './ValentineMessageCard';
import { Button } from '@/components/ui/button';

type SceneState = 'envelope' | 'card' | 'message';

export default function ValentineEnvelopeScene() {
  const [sceneState, setSceneState] = useState<SceneState>('envelope');
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [showFloatingHearts, setShowFloatingHearts] = useState(true);

  useEffect(() => {
    // Create floating hearts periodically
    const interval = setInterval(() => {
      setShowFloatingHearts((prev) => !prev);
      setTimeout(() => setShowFloatingHearts(true), 50);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleEnvelopeClick = () => {
    if (envelopeOpening || sceneState !== 'envelope') return;
    setEnvelopeOpening(true);
    setTimeout(() => {
      setSceneState('card');
      setEnvelopeOpening(false);
    }, 1200);
  };

  const handleOpenCard = () => {
    setSceneState('message');
  };

  const handleBackToCard = () => {
    setSceneState('card');
  };

  const handleResetToEnvelope = () => {
    setSceneState('envelope');
    setEnvelopeOpening(false);
  };

  if (sceneState === 'message') {
    return <ValentineMessageCard onBack={handleBackToCard} onResetToEnvelope={handleResetToEnvelope} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-background-pattern.dim_2048x2048.png)',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating hearts background */}
      {showFloatingHearts && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              <Heart
                className="text-rose-400"
                size={12 + Math.random() * 20}
                fill="currentColor"
              />
            </div>
          ))}
        </div>
      )}

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Sparkles className="text-rose-300" size={8 + Math.random() * 8} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {sceneState === 'envelope' && (
          <div className="text-center space-y-8 motion-safe:animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-700 mb-8 font-serif tracking-tight">
              A Special Message For You
            </h1>

            {/* Envelope */}
            <div
              className={`relative mx-auto cursor-pointer transition-all duration-500 hover:scale-105 ${
                envelopeOpening ? 'motion-safe:animate-envelope-flip' : ''
              }`}
              onClick={handleEnvelopeClick}
              onKeyDown={(e) => e.key === 'Enter' && handleEnvelopeClick()}
              role="button"
              tabIndex={0}
              aria-label="Open envelope"
            >
              <div className="relative w-72 h-48 md:w-96 md:h-64">
                {/* Envelope base */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'url(/assets/generated/valentine-envelope.dim_1200x800.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>

                {/* Envelope flap */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-rose-200 to-rose-300 rounded-t-2xl origin-top transition-transform duration-700 shadow-lg ${
                    envelopeOpening ? 'motion-safe:-rotate-x-90' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3 z-10">
                  
                  {/* Hey Love */}
                  <h2 className="text-3xl md:text-4xl font-bold text-rose-700 font-serif">
                    Hey Love
                  </h2>

                  {/* Heart Emoji */}
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl motion-safe:animate-pulse-glow">
                    <Heart className="text-white" size={30} fill="currentColor" />
                  </div>

                  {/* Date */}
                  <p className="text-sm text-rose-500 tracking-widest">
                    14.02.2026
                  </p>

                </div>

                {/* Heart seal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl motion-safe:animate-pulse-glow z-20">
                  <Heart className="text-white" size={32} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-rose-600 text-lg font-medium motion-safe:animate-pulse flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Click the envelope to open
              <Sparkles size={20} />
            </p>
          </div>
        )}

        {sceneState === 'card' && (
          <div className="w-full max-w-6xl motion-safe:animate-card-emerge">
            {/* Greeting card (open book style) */}
            <div className="grid md:grid-cols-2 gap-1 bg-rose-900/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Left panel - Front cover */}
              <div className="relative bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'url(/assets/generated/heart-stickers-set.dim_1024x1024.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>

                <div className="relative z-10 text-center space-y-6">
                  <div className="flex justify-center gap-3 mb-4">
                    {['💐', '💕', '💐'].map((emoji, i) => (
                      <span
                        key={i}
                        className="text-4xl motion-safe:animate-float-slow"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-rose-700 font-serif leading-tight">
                    Happy 4th Valentine's Day
                  </h2>

                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto rounded-full" />

                  <p className="text-sm md:text-base text-rose-600 max-w-xs mx-auto">
                    A special message from someone who adores you
                  </p>

                  <div className="flex justify-center gap-3 mt-6">
                    {['🌸', '💗', '🌸'].map((emoji, i) => (
                      <span
                        key={i}
                        className="text-2xl motion-safe:animate-float-slow"
                        style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel - Interior */}
              <div className="relative bg-gradient-to-br from-white via-rose-50/50 to-pink-50 p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
                <div className="relative z-10 text-center space-y-6">
                  <div className="relative inline-block">
                    <span className="text-5xl motion-safe:animate-float-slow">💖</span>
                  </div>

                  <p className="text-lg md:text-xl text-rose-700 font-serif max-w-sm mx-auto leading-relaxed">
                    Open your heart to something special inside...
                  </p>

                  <div className="flex justify-center gap-2 my-4">
                    {['✨', '❤️', '✨'].map((emoji, i) => (
                      <span key={i} className="text-xl">
                        {emoji}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={handleOpenCard}
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg motion-safe:animate-pulse-glow transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Read My Heart 💌
                  </Button>

                  <div className="flex justify-center gap-3 mt-6">
                    {['🌸', '💗'].map((emoji, i) => (
                      <span
                        key={i}
                        className="text-2xl motion-safe:animate-float-slow"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
