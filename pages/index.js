import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>InstaClone</title>
        <meta
          name="description"
          content="Instagram clone created with nextJs and tailwindcss"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      {/* Modal */}
    </div>
  );
}
