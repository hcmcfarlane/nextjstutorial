import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date.js";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts.js";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: { allPostsData },
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi, I'm Hannah and this is my first experience building a
					Next.js app.
				</p>
				<p style={{ fontSize: "0.85em" }}>
					<em>
						(This is a sample website - based on{" "}
						<a href="https://nextjs.org/learn">
							the Next.js tutorial
						</a>
						.)
					</em>
				</p>
			</section>
			<section>
				<h2>In this tutorial I learned how to</h2>
				<ul>
					<li>Add pages to a Next.js app</li>
					<li>Use the Link component for client-side navigation</li>
					<li>Include static assets in a project</li>
					<li>Use CSS modules for unique class names</li>
					<li>
						Add a global CSS file to <code>_app.js</code>
					</li>
					<li>Utilise pre-rendering for faster performance</li>
					<li>
						Use server-side <code>getStaticProps</code> for
						statically generated pages + external data fetching
					</li>
					<li>
						When to use server-side rendering to fetch data at
						request time
					</li>
					<li>
						Implement dynamic routing (for blog posts, in this
						example) using <code>getStaticPaths</code>
					</li>
					<li>
						Initialise a serverless API endpoint from a Next.js app
					</li>
				</ul>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
