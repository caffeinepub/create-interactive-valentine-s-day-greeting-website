import ValentineEnvelopeScene from './components/ValentineEnvelopeScene';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ValentineEnvelopeScene />
      </main>
      <footer className="py-6 px-4 text-center text-sm text-rose-600/70 bg-gradient-to-t from-rose-50/50 to-transparent">
        <p>
          Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-greeting'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-rose-700 hover:text-rose-800 transition-colors underline decoration-rose-300 hover:decoration-rose-500"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1 text-xs text-rose-500/60">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
