import { useState, useEffect } from 'react';
import { Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ValentineMessageCardProps {
  onBack: () => void;
  onResetToEnvelope: () => void;
}

const valentineMessage = `My Shine✨,

Three and a half years ago.
If someone had told me back then that a simple concert and one insta request would turn into the most meaningful part in my life, I wouldn't have believed them. And here we are today celebrating Valentine's day and still holding on to each other across miles. 

These many years this distance wasn't easy. But, 
We learned how to love and kiss through screens and late-night calls.
We discovered that a simple "I miss you" can carry a weight heavier than miles. 
And somewhere in between time zones and countdowns, we quietly learned the strength it takes to wait and choose each other, again and again every ups and downs. 

in these years. 
You've become my safest place without even being physically here.
You're the first person I want to tell things to.
The one I want to celebrate with.
The one I want to run to when life feels overwhelming and when life kicks me down.
and my favourite call and message notification across apps. 🥰

One day, when this distance fades and becomes a story. 
you'll find this card in your mail box important folder and we will still be in love
and when that day comes, I will hold you a little tighter, knowing we earned every single moment.

Until then, I'll keep choosing you.
In every timezone.
In every phase of life.
In every version of you.
and when nobody is beside you, if you turn back and see. ill be there behind you. 

Happy 4th Valentine's Day Maam ❤️🫂

I am very grateful to God for your existence in my life.
because out of all the people trying beside you,  He made you chose me.
And out of all the stories that could have been written, He wrote ours.

Thanks for everything ma 🥹😘 

Me Loves You Moreeeeeeee 😘😘
and remember no distance could ever make my heart love you less. 🫂

- Jen 😬`;

export default function ValentineMessageCard({ onBack, onResetToEnvelope }: ValentineMessageCardProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= valentineMessage.length) {
        setDisplayedText(valentineMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-auto bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Background pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-background-pattern.dim_2048x2048.png)',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(60)].map((_, i) => {
            const colors = ['text-rose-400', 'text-pink-400', 'text-rose-500', 'text-pink-500'];
            const emojis = ['❤️', '💕', '💗', '✨', '🌸', '💖'];
            const isEmoji = Math.random() > 0.4;

            return (
              <div
                key={i}
                className={`absolute motion-safe:animate-confetti-fall ${
                  isEmoji ? '' : colors[Math.floor(Math.random() * colors.length)]
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10%',
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                {isEmoji ? (
                  <span className="text-xl">{emojis[Math.floor(Math.random() * emojis.length)]}</span>
                ) : (
                  <div
                    className={`w-2 h-2 ${Math.random() > 0.5 ? 'rounded-full' : ''}`}
                    style={{ backgroundColor: 'currentColor' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Rising hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 motion-safe:animate-rise-heart"
            style={{
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          >
            <Heart className="text-rose-400" size={20 + Math.random() * 15} fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300/30 rounded-full blur-3xl motion-reduce:hidden" />
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-300/25 rounded-full blur-3xl motion-reduce:hidden" />
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-rose-200/30 rounded-full blur-3xl motion-reduce:hidden" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-400/25 rounded-full blur-3xl motion-reduce:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:px-12 md:py-16">
        {/* Top decoration */}
        <div className="flex justify-center gap-3 mb-8 motion-safe:animate-fade-in-up">
          {['💖', '💕', '💖'].map((emoji, i) => (
            <span
              key={i}
              className="text-4xl motion-safe:animate-float-slow"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 motion-safe:animate-fade-in-up border border-rose-100">
          <div
            className={`text-base md:text-lg text-rose-700 font-serif leading-relaxed whitespace-pre-wrap ${
              isTyping ? 'after:content-["▌"] after:animate-typing-cursor after:ml-1' : ''
            }`}
          >
            {displayedText}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center motion-safe:animate-fade-in-up">
          <Button
            onClick={onBack}
            variant="outline"
            size="lg"
            className="bg-white/80 backdrop-blur-sm border-rose-300 text-rose-700 hover:bg-rose-50 hover:border-rose-400 px-6 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Card
          </Button>

          <Button
            onClick={onResetToEnvelope}
            variant="outline"
            size="lg"
            className="bg-white/80 backdrop-blur-sm border-rose-300 text-rose-700 hover:bg-rose-50 hover:border-rose-400 px-6 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="mr-2" size={20} />
            Start Over
          </Button>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center gap-3 mt-12 motion-safe:animate-fade-in-up">
          {['🌹', '💝', '🌹'].map((emoji, i) => (
            <span
              key={i}
              className="text-3xl motion-safe:animate-float-slow"
              style={{ animationDelay: `${i * 0.3 + 1}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
