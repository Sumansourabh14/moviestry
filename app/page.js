import NowPlaying from "@/components/movies/NowPlaying";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section>
        <h1 className="text-5xl md:text-8xl xl:text-9xl 2xl:text-[12rem] font-extrabold py-36">
          Moviestry.
        </h1>
      </section>
      <NowPlaying />
    </main>
  );
}
