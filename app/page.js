import NowPlaying from "@/components/movies/NowPlaying";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="min-h-96">
        <h1 className="text-5xl md:text-8xl xl:text-9xl font-extrabold">
          Moviestry.
        </h1>
      </section>
      <NowPlaying />
    </main>
  );
}
