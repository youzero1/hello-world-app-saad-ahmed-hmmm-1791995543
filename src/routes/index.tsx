import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-stone-200/80 bg-white px-8 py-14 text-center shadow-xl shadow-stone-200/60 sm:px-14 sm:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-700 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          A fresh start
        </span>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
          Hello, <span className="text-emerald-600">World!</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-stone-500">
          Every great app begins with two small words. This one is no exception.
        </p>

        <div className="mx-auto mt-10 h-px w-24 bg-stone-200" />

        <p className="mt-10 text-sm text-stone-400">Built with care — one page at a time.</p>
      </div>
    </main>
  );
}
