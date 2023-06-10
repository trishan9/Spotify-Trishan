export default function ErrorPage() {
    return (
        <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="flex items-center justify-center mt-10 gap-x-6">
                    <a
                        href={"/"}
                        className="rounded-md bg-[#1ed761] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#29a155]"
                    >
                        Go back home
                    </a>
                </div>
            </div>
        </main>
    )
}
