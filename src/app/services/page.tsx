import ServicesClient from "../../components/ServicesClient";
import client from "../../../tina/__generated__/client";

const SERVICE_FILES = [
  "chirurgie.json",
  "esthetique.json",
  "implants.json",
  "orthodontie.json",
  "preservation.json",
  "protheses.json",
];

async function fetchAllServices() {
  const results = await Promise.all(
    SERVICE_FILES.map((file) =>
      client.queries.service({ relativePath: file }),
    ),
  );
  return {
    items: results.map((r) => ({ data: r.data.service })),
    queries: results.map((r) => ({
      query: r.query,
      variables: r.variables,
      data: r.data,
    })),
  };
}

export default async function ServicesPage() {
  try {
    const [homepageRes, settingsRes, servicesData] = await Promise.all([
      client.queries.homepage({ relativePath: "index.json" }),
      client.queries.global_settings({ relativePath: "settings.json" }),
      fetchAllServices(),
    ]);

    return (
      <ServicesClient
        homepageData={homepageRes.data}
        settings={settingsRes.data}
        services={servicesData.items}
        serviceQueries={servicesData.queries}
      />
    );
  } catch (error) {
    console.error("Failed to fetch services data", error);
    return (
      <ServicesClient
        homepageData={{}}
        settings={null}
        services={[]}
        serviceQueries={[]}
      />
    );
  }
}
