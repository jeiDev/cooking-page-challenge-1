import "~/__mocks__"
import "~/styles/animations.css";
import '~/styles/root/root-light.css';
import '~/styles/fonts.css';
import '~/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
