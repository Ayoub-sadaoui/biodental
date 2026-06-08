import React from "react";
import HomeClient from "../components/HomeClient";
import client from "../../tina/__generated__/client";
import { readdir } from "fs/promises";
import path from "path";

export default async function Page() {
  try {
    const servicesDir = path.join(process.cwd(), "content", "services");

    const [homepageRes, serviceFiles] = await Promise.all([
      client.queries.homepage({ relativePath: "index.json" }),
      readdir(servicesDir),
    ]);

    const sortedServiceFiles = serviceFiles
      .filter((file) => file.endsWith(".json"))
      .sort((a, b) => a.localeCompare(b));

    const services = await Promise.all(
      sortedServiceFiles.map(async (file) => {
        const { data } = await client.queries.service({ relativePath: file });
        return { data: data.service };
      }),
    );

    return (
      <HomeClient
        query={homepageRes.query}
        variables={homepageRes.variables}
        data={homepageRes.data}
        services={services}
      />
    );
  } catch (error) {
    console.error("Failed to fetch homepage data", error);

    return (
      <HomeClient
        query=""
        variables={{}}
        data={{ homepage: {} }}
        services={[]}
      />
    );
  }
}
