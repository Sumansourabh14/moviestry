import React from "react";
import data from "@/utils/sampleContent/movieDetails.json";
import Image from "next/image";

const MovieDetails = ({ params }) => {
  const movieId = params.id;

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/original/${data.backdrop_path})`,
          paddingTop: "200px",
          paddingBottom: "200px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <section className="w-[1400px] m-auto px-6 pt-8">
        <section className="flex gap-8">
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500/${data.poster_path}`}
            alt={data.original_title}
            height={400}
            width={280}
          />
          <section className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">{data.original_title}</h1>
            <p className="w-[900px]">{data.overview}</p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default MovieDetails;
