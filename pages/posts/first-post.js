import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>첫 번째 헤더</title>
      </Head>
      <h1>첫 번 째 글 좋아요</h1>
    </Layout>
  );
}
