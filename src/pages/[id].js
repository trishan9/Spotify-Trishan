import React from 'react'
import NavBar from '@/src/components/Common/NavBar'
import Footer from '@/src/components/Common/Footer'


const url =
    "https://spotify23.p.rapidapi.com/search/?q=s&type=albums&limit=100";
const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
};

export const getStaticPaths = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    const { albums } = result;
    const { items } = albums;

    const paths = items.map((item) => {
        const details = item.data
        return {
            params: { id: details.uri.slice(14) }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();

    return {
        props: { album: result }
    }
}


const AlbumDetails = ({ album }) => {
    const { albums: albumArr } = album
    return (
        <React.Fragment>
            <NavBar active="Search Albums"/>
            <div className='font-primary'>
                {albumArr.map((album) => {
                    const { name, release_date, total_tracks, tracks, popularity, images, artists, uri, copyrights } = album

                    return (
                        <div key={uri} className="py-32 bg-white">
                            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                                <div className="flex flex-col items-end justify-between max-w-2xl gap-16 mx-auto lg:mx-0 lg:max-w-none lg:flex-row">
                                    <div className="w-full lg:max-w-lg lg:flex-auto">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                            Album Details Page
                                        </h2>
                                        <p className="mt-6 text-xl leading-8 text-gray-600">
                                            Here is the detailed information about Album: <span className='font-bold'> {name}</span>
                                        </p>
                                        <img
                                            src={images[0].url}
                                            alt=""
                                            className="hover:scale-105 transition ease-in-out mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                                        />
                                    </div>
                                    <div className="w-full lg:max-w-xl lg:flex-auto">
                                        <h3 className="sr-only">Job openings</h3>
                                        <ul className="-my-8 divide-y divide-gray-100">
                                            <li className="py-8">
                                                <dl className="relative flex flex-wrap gap-x-3">
                                                    <dd className="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
                                                        Album Name: {name}
                                                    </dd>
                                                    <dd className="flex-none w-full mt-2 text-base leading-7 text-gray-600">Artist: {artists[0].name}</dd>
                                                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">Release Date: {release_date}</dd>
                                                </dl>
                                            </li>

                                            <li className="py-8">
                                                <dl className="relative flex flex-wrap gap-x-3">
                                                    <dd className="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
                                                        Total Tracks: {total_tracks}
                                                    </dd>
                                                    <dd className="flex-none w-full mt-2 text-base leading-7 text-gray-600 capitalize ">{
                                                        tracks.items.map((track, index) => (
                                                            <span className='mr-2' key={track.uri}><span className='font-bold'>{index + 1}. </span>{track.name}</span>
                                                        ))
                                                    }</dd>
                                                </dl>
                                            </li>

                                            <li className="py-8">
                                                <dl className="relative flex flex-wrap gap-x-3">
                                                    <dd className="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
                                                        Popularity: {popularity}
                                                    </dd>
                                                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">Copyrights</dd>
                                                    <dd className="flex items-center mt-4 text-base leading-7 text-gray-500 gap-x-3">
                                                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                                                            <circle cx={1} cy={1} r={1} />
                                                        </svg>
                                                        {
                                                            copyrights.map((copyright, index) => (
                                                                <span className='mr-2' key={index}>{copyright.text}</span>
                                                            ))
                                                        }
                                                    </dd>
                                                </dl>
                                            </li>

                                        </ul>
                                        <div className="flex pt-8 mt-8 border-t border-gray-100">
                                            <a href={"/search"} className="text-sm p-4 rounded-md font-semibold leading-6 bg-[#1ed761] transition ease-in-out hover:bg-[#29a155] ">
                                                Go Back to Search Page <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default AlbumDetails
