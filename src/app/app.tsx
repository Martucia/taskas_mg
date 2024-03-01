import { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { AppProvider } from "./app-provider";
import { AppLayout } from "./app-layout";
import { ThemeProvider } from "next-themes";

const nunito = Nunito({ subsets: ["cyrillic", "latin"] });
export function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AppProvider>
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}
