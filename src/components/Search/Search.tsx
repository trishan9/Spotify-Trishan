import React, { useState, useEffect } from "react";
import NavBar from "@/src/components/Common/NavBar";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Loader from "@/src/components/Common/Loader";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [myAlbums, setMyAlbums] = useState([]);
  const [rawAlbums, setRawAlbums] = useState([]);
  const [searchError, setSearchError] = useState(false);

  const url =
    "https://spotify23.p.rapidapi.com/search/?q=s&type=albums&limit=100";
  const options: any = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getAlbums = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const { albums } = result;
        const { items } = albums;
        setMyAlbums(items);
        setRawAlbums(items);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getAlbums();
  }, []);

  const searchAlbums = (query: any) => {
    const filteredAlbums = rawAlbums.filter((album: any) => {
      return album.data.name.toLowerCase().startsWith(query.toLowerCase());
    });
    if (filteredAlbums.length > 0) {
      setSearchError(false);
      setMyAlbums(filteredAlbums);
    } else {
      setSearchError(true);
    }
  };

  return (
    <div className="font-primary">
      <NavBar active="Search Albums" />

      <div className="relative overflow-hidden bg-[#171524] isolate pt-14">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-32 mx-auto sm:py-48 lg:py-56">
          <div className="relative z-0 flex items-center justify-center flex-1 px-2 sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search Albums
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyingGlassIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                  placeholder="Search Albums"
                  type="search"
                  onChange={(e) => {
                    searchAlbums(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

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
            {searchError && (
              <div className="flex items-center justify-center w-full lg:col-span-3">
                No Search Results Found
              </div>
            )}

            {!loading &&
              !searchError &&
              myAlbums &&
              myAlbums.map((post: any) => {
                const albumDetails = post.data;
                return (
                  <article
                    key={albumDetails.uri}
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
    </div>
  );
};

export default Search;
