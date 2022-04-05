import "../styles/globals.css";
import defaultLayout from "../components/layout/default";
import MainLayout from "../components/layout/index";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;

  return (
    <MainLayout>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </MainLayout>
  );
}

export default MyApp;
