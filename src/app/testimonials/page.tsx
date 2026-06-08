import TestimonialsClient from "../../components/TestimonialsClient";
import client from "../../../tina/__generated__/client";

export default async function TestimonialsPage() {
  try {
    const [homepageRes, settingsRes, testimonialsRes] = await Promise.all([
      client.queries.homepage({ relativePath: "index.json" }),
      client.queries.global_settings({ relativePath: "settings.json" }),
      client.queries.testimonials_page({ relativePath: "index.json" }),
    ]);

    return (
      <TestimonialsClient
        query={testimonialsRes.query}
        variables={testimonialsRes.variables}
        data={testimonialsRes.data}
        homepage={homepageRes.data}
        settings={settingsRes.data}
      />
    );
  } catch (error) {
    console.error("Failed to fetch testimonials data", error);
    return (
      <TestimonialsClient
        query=""
        variables={{}}
        data={{}}
        homepage={null}
        settings={null}
      />
    );
  }
}
