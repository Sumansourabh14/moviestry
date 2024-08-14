"use client";
import React, { useContext, useEffect, useState } from "react";
import data from "@/utils/sampleContent/movieDetails.json";
import Image from "next/image";
import { GlobalContext } from "@/services/globalContext";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const MovieDetails = ({ params }) => {
  // const [data, setData] = useState(null);
  // const { getMovieDetails, loading } = useContext(GlobalContext);

  // const movieId = params.id;

  // useEffect(() => {
  //   let mounted = true;

  //   const fetchData = async () => {
  //     const res = await getMovieDetails(movieId);

  //     if (mounted) {
  //       console.log(res.data);
  //       setData(res.data);
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     mounted = false;
  //   };
  // }, [movieId]);

  useEffect(() => {
    document.title = `${data?.original_title} | Moviestry`;
  }, [data]);

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60); // Get the whole number of hours
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  };

  // if (loading) {
  //   return <p>loading...</p>;
  // }

  return (
    !!data && (
      <section className="mb-24">
        <div className="absolute w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] bg-gradient-to-t from-white"></div>
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/original/${data.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]"
        ></div>
        <section className="max-w-[1400px] mx-auto px-6">
          <section className="flex gap-8 ">
            <section className="relative w-full sm:w-64 sm:h-96 h-auto">
              <Image
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500/${data.poster_path}`}
                alt={data.original_title}
                fill
                className="object-cover rounded-md"
              />
            </section>
            <section className="flex flex-col gap-4">
              {!!data?.tagline && (
                <p className="max-w-[900px] text-gray-800 font-light">
                  {data.tagline}
                </p>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                {data.original_title}
              </h1>
              <section className="flex gap-2">
                <section className="flex gap-2">
                  {!!data?.release_date && (
                    <p className="max-w-[900px] text-gray-600">
                      {data.release_date}
                    </p>
                  )}
                  <Separator orientation="vertical" />
                  {!!data?.runtime && (
                    <p className="max-w-[900px] text-gray-600">
                      {convertMinutesToHours(data.runtime)}
                    </p>
                  )}
                </section>
                <Separator orientation="vertical" />
                {!!data?.spoken_languages && (
                  <section>
                    {data.spoken_languages.map((lang) => (
                      <p
                        key={lang.iso_639_1}
                        className="max-w-[900px] text-gray-600"
                      >
                        {lang.name}
                      </p>
                    ))}
                  </section>
                )}
              </section>
              <p className="max-w-[900px]">{data.overview}</p>
              {data.genres.length > 0 && (
                <section className="flex gap-2">
                  {data.genres.map((genre) => (
                    <Badge key={genre.id} variant="outline">
                      {genre.name}
                    </Badge>
                  ))}
                </section>
              )}
              {/* {data?.production_companies.length > 0 && (
                <section className="flex gap-2">
                  {data?.production_companies.map((company) => (
                    <section key={company.id}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500/${company.logo_path}`}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </section>
                  ))}
                </section>
              )} */}
              <section className="flex gap-4 items-center">
                {
                  <p className="text-5xl">
                    {parseFloat(data.vote_average.toFixed(1))}
                  </p>
                }
                <Progress value={data.vote_average * 10} />
              </section>
            </section>
          </section>
        </section>
      </section>
    )
  );
};

export default MovieDetails;
