import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "../components/header";
import { queryClient } from "@/shared/api/query-client";

export default function App({ Component, pageProps, router }: AppProps) {
  const noHeaderRoutes = ["/", "/login", "/register"];
  const showHeader = !noHeaderRoutes.includes(router.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="font-sans">
        {showHeader && <Header />}
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
