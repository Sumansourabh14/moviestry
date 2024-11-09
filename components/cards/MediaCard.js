import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MediaCard = ({ posterPath, title, releaseDate }) => {
  return (
    <Card className="rounded-sm">
      <CardHeader className="p-0 pb-2">
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
        <CardTitle
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
        )}
      </CardHeader>
    </Card>
  );
};

export default MediaCard;
