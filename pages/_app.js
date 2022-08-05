import "../styles/globals.css";
import defaultLayout from "../components/layout/default";
import MainLayout from "../components/layout/index";
import Head from "next/head";
import { AuthProvider, user } from "../contextAPI";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("../components/nprogress/index");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;

  return (
    <AuthProvider>
      <MainLayout>
        <Head></Head>
        <Layout>
          <TopProgressBar id="nprogress" />
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
