import AboutClient from "../../components/AboutClient";
import client from "../../../tina/__generated__/client";

export default async function AboutPage() {
  try {
    const [aboutRes, settingsRes] = await Promise.all([
      client.queries.about_page({ relativePath: "index.json" }),
      client.queries.global_settings({ relativePath: "settings.json" }),
    ]);

    return (
      <AboutClient
        query={aboutRes.query}
        variables={aboutRes.variables}
        data={aboutRes.data}
        settings={settingsRes.data}
      />
    );
  } catch (error) {
    console.error("Failed to fetch about page data", error);
    return <AboutClient query="" variables={{}} data={{}} settings={null} />;
  }
}
