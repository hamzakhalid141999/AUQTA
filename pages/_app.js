import "../styles/globals.css";
import { useEffect } from "react";
import defaultLayout from "../components/layout/default";
import MainLayout from "../components/layout/index";
import Head from "next/head";
import { AuthProvider, user } from "../contextAPI";
import dynamic from "next/dynamic";
import { analytics } from "../components/utils/seo/analytics.tsx";
import { useRouter } from "next/router";

const TopProgressBar = dynamic(
  () => {
    return import("../components/nprogress/index");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("796409181495556"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  useEffect(() => {
    analytics(window, document, "script", "dataLayer", "GTM-NRVTB5C");
  });

  const Layout = Component.Layout || defaultLayout;

  return (
    <AuthProvider>
      <MainLayout>
        <Head>
          <title>AUQTA | World's First Immersive Real Estate Poral</title>
          {/* <link rel="icon" href="/favicon.ico"></link> */}
        </Head>
        <Layout>
          <TopProgressBar id="nprogress" />
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
