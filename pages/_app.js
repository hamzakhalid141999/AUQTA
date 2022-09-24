import "../styles/globals.css";
import { useEffect } from "react";
import defaultLayout from "../components/layout/default";
import MainLayout from "../components/layout/index";
import Head from "next/head";
import { AuthProvider, user } from "../contextAPI";
import dynamic from "next/dynamic";
import { analytics } from "../components/utils/seo/analytics.tsx";
import { useRouter } from "next/router";
import Script from "next/script";

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
        ReactPixel.init("1718277208571044"); // facebookPixelId
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
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8KGKB9HT3P`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8KGKB9HT3P', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <AuthProvider>
        <MainLayout>
          <Head>
            <title>
              Auqta.com | World's First Immersive Real Estate Portal
            </title>
            <meta
              name="facebook-domain-verification"
              content="41hk5o0p039gl353xrlbhst33mt0w9"
            />
            {/* <link rel="icon" href="/favicon.ico"></link> */}
          </Head>
          <Layout>
            <TopProgressBar id="nprogress" />
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </AuthProvider>
    </>
  );
}

export default MyApp;
