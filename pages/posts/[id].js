import Head from "next/head.js";
import { getAllPostIds, getPostData } from "../../lib/posts.js";
import Layout from "../../components/layout.js";
import Date from "../../components/date.js";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: { postData },
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{`${postData.title} | Blog`}</title>
			</Head>
			<h1 className={utilStyles.headingXl}>{postData.title}</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={postData.date} />
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: postData.contentHtml,
				}}></div>
		</Layout>
	);
}
