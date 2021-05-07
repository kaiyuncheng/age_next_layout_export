import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';



export async function getStaticProps() {
  const res = await fetch('https://thebetteraging-hardy.businesstoday.com.tw/Api_test/detail/202104070054/178191/%E8%A6%AA%E6%84%9B%E7%9A%84%E5%85%AC%E5%85%AC%E7%AA%81%E5%A4%B1%E6%99%BA%EF%BC%8C%E5%A4%A9%E5%B0%B1%E5%BF%AB%E5%B4%A9%E5%A1%8C%EF%BC%81%E7%8D%A8%E5%AD%90%E5%AA%B3%E5%A9%A6%E9%BD%8A%E5%BF%83%E5%B0%8B%E6%B4%BB%E8%B7%AF%EF%BC%8C%E5%85%A8%E5%AE%B6%E4%BA%BA%E7%9A%84%E6%BA%AB%E7%85%A6%E6%98%A5%E5%A4%A9%E7%B5%82%E6%96%BC%E4%BE%86%E8%A8%AA')
  const posts = await res.json();
  console.log(posts, "second post1");

  return {
    props: {
      posts,
    },
  }
}
export default function second({posts}) {

  // const siteTitle = posts.article_info.title;

  function createMarkup() {
    return {__html: posts.content_info[0].text};
  }
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  
  return (

    <Layout siteTitle={posts.article_info.title}>
    {console.log(posts, "內頁 second post2")}
      <Head>
        {/* <title>{siteTitle}</title>
        <meta
          property="og:title"
          content={siteTitle}
        /> */}
      </Head>
      <h2 className="text-2xl p-20">{posts.article_info.title}</h2>
      <MyComponent/>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}