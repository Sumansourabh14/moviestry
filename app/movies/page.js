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
        <MoviesRow title="Trending" endpoint={API_REQUESTS.trending} />
        <MoviesRow title="Now Playing" endpoint={API_REQUESTS.nowPlaying} />
        <MoviesRow title="Top Rated" endpoint={API_REQUESTS.topRated} />
        <MoviesRow title="Sci-fi" endpoint={API_REQUESTS.sciFi} />
        <MoviesRow title="Drama" endpoint={API_REQUESTS.drama} />
        <MoviesRow title="Adventure" endpoint={API_REQUESTS.adventure} />
        <MoviesRow title="Comedy" endpoint={API_REQUESTS.comedy} />
        <MoviesRow title="Horror" endpoint={API_REQUESTS.horror} />
        <MoviesRow title="War" endpoint={API_REQUESTS.war} />
      </section>
    </PageLayout>
  );
};

export default Movies;
