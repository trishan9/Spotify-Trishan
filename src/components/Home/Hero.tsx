import React from "react";
import Albums from "@/src/components/Home/Albums";

const API_URL =
  "https://spotify23.p.rapidapi.com/search/?q=t&type=albums&offset=9&limit=9";
const API_OPTIONS = {
  method: "GET",
  headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  },
};

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden isolate pt-14">
        <img
          src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
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
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-white/10 hover:ring-white/20">
              Browse top trending albums and songs in{" "}
              <a href="#albums" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                &nbsp; Spotify Trishan <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Browse Your Favourite Music Albums Now!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            We welcome you on <span className="text-[#1ed761]"> Spotify Trishan</span>.
            Dive into a Sonic Adventure, Where Every Album Tells a Story. Discover and Rediscover the Magic of Music.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#albums"
                className="rounded-md bg-[#1ed761] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm transition ease-out hover:bg-[#29a155] border-solid border-[#1ed761] border-2"
              >
                Trending Albums 
              </a>
              <a
                href="search"
                className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition ease-out hover:bg-gray-800 border-solid border-[#1ed761] border-2"
              >
                Search Albums <span aria-hidden="true">→</span>
              </a>
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

      <div id="albums">
        <Albums API_URL={API_URL} API_OPTIONS={API_OPTIONS}/>
      </div>
    </React.Fragment>
  );
};

export default Hero;
