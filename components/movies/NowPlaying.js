"use client";
import React from "react";
import data from "@/utils/sampleContent/nowPlaying.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import { MdMoreVert } from "react-icons/md";
import Link from "next/link";

const NowPlaying = () => {
  const movies = data.results;
  console.log(movies);

  return (
    <section style={{ maxWidth: "1400px" }}>
      <h2 className="text-3xl pb-4">Now Playing</h2>

      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {movies.map((movie) => (
              <CarouselItem key={movie.id} className="basis-1/7 relative">
                <Link href={`/title/${movie.id}`}>
                  <Card>
                    <CardHeader style={{ padding: 0 }}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500/${movie.poster_path}`}
                        alt={movie.title}
                        height={270}
                        width={180}
                      />
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                      <Progress
                        value={movie.vote_average * 10}
                        className={`h-2 w-full rounded-full`}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default NowPlaying;
