import React from 'react'
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const QueryClient = () => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    })

    return (
        <div>
            <QueryClientProvider client={client} >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </QueryClientProvider>


        </div>
    )
}

export default QueryClient