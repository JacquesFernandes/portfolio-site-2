import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";
import {Section} from "../components/section";
import {Nav} from "../components/nav";

const BriefPage: NextPage = () => <>
	<PageLayout title="Brief" >
		<Section>
			<h1>Brief</h1>
		</Section>
		<Nav />
	</PageLayout>
</>;

export default BriefPage;