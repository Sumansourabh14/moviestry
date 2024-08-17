import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const MediaCard = ({ posterPath, title, releaseDate }) => {
  return (
    <Card className="max-w-[220px] rounded-sm">
      <CardHeader className="p-0 pb-2">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/w500/${posterPath}`}
          alt={title}
          height={300}
          width={220}
          className="rounded-sm"
        />
        <CardTitle className="text-base text-center">{title}</CardTitle>
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