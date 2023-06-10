import React from "react";
import Search from "@/src/components/Search/Search";
import Footer from "@/src/components/Common/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
    return (
        <React.Fragment>
            <div className="bg-gray-900 font-primary">
                <QueryClientProvider client={queryClient}>
                    <Search />
                </QueryClientProvider>
                <Footer />
            </div>
        </React.Fragment>
    );
}
