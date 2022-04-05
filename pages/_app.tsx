import type { AppProps } from 'next/app'
// SOURCE: https://stackoverflow.com/a/59429852
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import '../styles/globals.css';

// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
