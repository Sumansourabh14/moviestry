import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MediaCard = ({ posterPath, title, releaseDate }) => {
  return (
    <Card className="relative rounded-sm overflow-hidden group">
      <CardHeader className="p-0">
        <Image
          src={
            process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL + `/w500/${posterPath}`
          }
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
        {/* <CardTitle
          title={title}
          className="text-base text-center overflow-hidden whitespace-nowrap text-ellipsis px-2"
        >
          {title}
        </CardTitle>
        {!!releaseDate ? (
          <CardDescription className="text-sm text-center">
            {new Date(releaseDate).getFullYear()}
          </CardDescription>
        ) : (
          <CardDescription className="text-sm text-center">
            Unreleased
          </CardDescription>
        )} */}
      </CardHeader>

      <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-100 px-4">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-sm">
          {releaseDate ? new Date(releaseDate).getFullYear() : "Unreleased"}
        </p>
      </div>
    </Card>
  );
};

export default MediaCard;
