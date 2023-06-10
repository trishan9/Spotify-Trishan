import React from "react";
import NavBar from "@/src/components/Common/NavBar"
import Hero from "@/src/components/Home/Hero";
import Footer from "@/src/components/Common/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
    return (
        <React.Fragment>
            <div className="bg-gray-900 font-primary">
                <NavBar active="Home" />
                <QueryClientProvider client={queryClient}>
                    <Hero />
                </QueryClientProvider>
                <Footer />
            </div>
        </React.Fragment>
    );
}
