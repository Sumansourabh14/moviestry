import MoviesRow from "@/components/movies/MoviesRow";
import PageLayout from "@/components/screens/PageLayout";
import { API_REQUESTS } from "@/services/tmdbApiUrls";
import { siteTitle } from "@/utils/content/site";

const Movies = () => {
  return (
    <PageLayout
      title={`Browse Movies | ${siteTitle}`}
      pageTitle={"Browse Movies"}
    >
      <section className="flex flex-col gap-12">
        <MoviesRow title="Now Playing" endpoint={API_REQUESTS.nowPlaying} />
        <MoviesRow title="Sci-fi" endpoint={API_REQUESTS.sciFi} />
        <MoviesRow title="Drama" endpoint={API_REQUESTS.drama} />
      </section>
    </PageLayout>
  );
};

export default Movies;
