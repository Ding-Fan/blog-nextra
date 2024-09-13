import type { AppProps } from "next/app";
import "../globals.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
