import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/src/components/Common/Loader";

const Albums = (props: any) => {
  const { API_URL, API_OPTIONS } = props;
  const [loading, setLoading] = useState(false);

  const { error, data } = useQuery({
    queryKey: ["albumsData"],
    queryFn: async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL, API_OPTIONS);
        const result = await response.json();
        const { albums } = result;
        const { items } = albums;
        return items;
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top Trending Albums
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here is the sneak peek of the worldwide top trending albums
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {loading && <Loader />}
          {!loading &&
            data &&
            data.map((post: any) => {
              const albumDetails = post.data;
              return (
                <article
                  key={albumDetails.name}
                  className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden transition bg-gray-900 ease-in-outnout isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80 hover:scale-105"
                >
                  <img
                    src={albumDetails.coverArt.sources[0].url}
                    className="absolute inset-0 object-cover w-full h-full -z-10"
                  />

                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                    <time dateTime={albumDetails.date.year} className="mr-8">
                      {albumDetails.date.year}
                    </time>

                    <div className="flex items-center -ml-4 gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>

                      <div className="flex gap-x-2.5">
                        <img
                          src="https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png?v=637903118310000000"
                          className="flex-none w-6 h-6 rounded-full bg-white/10"
                        />

                        {albumDetails.artists.items[0].profile.name}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={`/${albumDetails.uri.slice(14)}`}>
                      <span className="absolute inset-0" />
                      {albumDetails.name}
                    </a>
                  </h3>
                </article>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Albums;
