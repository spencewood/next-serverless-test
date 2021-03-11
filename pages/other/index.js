import Footer from "@components/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(
  () => import(/* webpackChunkName: 'header' */ "../../components/Header"),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = () => {
  // some server props...
  return {
    props: {},
  };
};
