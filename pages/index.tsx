import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ScrollToTop from "react-scroll-to-top";

import {Header} from "../components/Header";
import Hero from "../components/Hero";
import {MyProjects} from "../components/MyProjects";
import {Timeline} from "../components/Timeline";
import {Programs} from "../components/Programs";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#def1f0] dark:bg-base-100">
			<Head>
				<title>Marcy Thany Portfolio</title>
			</Head>

			<main className="overflow-hidden">
				<Header />
				<Hero />
				<Programs />
				<Timeline />
				<MyProjects />
				<Contact />
			</main>
			<ScrollToTop smooth color="fill-neutral" className="flex items-center justify-center mb-12 fill-neutral" />
			<Footer />
		</div>
	);
}

export async function getStaticProps({locale = "pt-BR"}) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
