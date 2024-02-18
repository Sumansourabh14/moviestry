import LinkBtn from "../Links/LinkBtn";

const Hero = () => {
  return (
    <div className="bg-black px-6 py-28">
      <div className="custom-container">
        <div className="text-white text-center flex flex-col gap-10">
          <h1 className="font-leagueSpartan text-5xl lg:text-7xl xl:text-9xl font-semibold">
            MovieStry
          </h1>
          <p className="text-lg md:text-2xl">
            Make your own history of movies and TV
          </p>
          <LinkBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
