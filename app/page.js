"use client";
import SearchInput from "@/components/forms/SearchInput";
import NowPlaying from "@/components/movies/NowPlaying";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const encodedQuery = encodeURI(query);
    console.log({ query, encodedQuery });
    router.push(`/search/${encodedQuery}`);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="py-28 flex flex-col gap-8">
        <h1 className="text-5xl md:text-8xl xl:text-9xl 2xl:text-[12rem] font-extrabold ">
          Moviestry.
        </h1>
        <form onSubmit={handleClick}>
          <section className="flex gap-2 max-w-[500px] mx-auto">
            <SearchInput query={query} handleQueryChange={handleQueryChange} />
            <Button type="submit">Search</Button>
          </section>
        </form>
      </section>
      <NowPlaying />
    </main>
  );
}
