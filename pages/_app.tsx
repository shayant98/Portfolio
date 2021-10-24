import "../styles/globals.css";
import { MediaContextProvider, mediaStyles } from "../utils/media"
function MyApp({ Component, pageProps }) {
  return <MediaContextProvider>
    <Component {...pageProps} />;
  </MediaContextProvider>
}

export default MyApp;
