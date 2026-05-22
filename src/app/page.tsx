import React from "react";
import HomeClient from "../components/HomeClient";
import client from "../../tina/__generated__/client";
import { readFile } from "fs/promises";
import path from "path";

export default async function Page() {
  let servicesResult;

  try {
    const homepageFile = path.join(
      process.cwd(),
      "content",
      "homepage",
      "index.json",
    );
    const homepageContents = await readFile(homepageFile, "utf8");

    // Read the checked-in Tina content file directly so rich-text fields stay intact.
    const homepageData = JSON.parse(homepageContents);

    try {
      servicesResult = await client.queries.serviceConnection();
    } catch (error) {
      console.error("Failed to fetch services data from Tina CMS", error);
      servicesResult = {
        data: { serviceConnection: { edges: [] } },
      };
    }

    const services =
      servicesResult.data.serviceConnection.edges?.map((edge: any) => ({
        data: edge?.node,
      })) || [];

    return (
      <HomeClient
        query=""
        variables={{}}
        data={{ homepage: homepageData }}
        services={services}
      />
    );
  } catch (error) {
    console.error("Failed to read homepage data from disk", error);

    const homepageResult = {
      query: "",
      variables: {},
      data: { homepage: {} },
    };

    try {
      servicesResult = await client.queries.serviceConnection();
    } catch (serviceError) {
      console.error(
        "Failed to fetch services data from Tina CMS",
        serviceError,
      );
      servicesResult = {
        data: { serviceConnection: { edges: [] } },
      };
    }

    const services =
      servicesResult.data.serviceConnection.edges?.map((edge: any) => ({
        data: edge?.node,
      })) || [];

    return (
      <HomeClient
        query={homepageResult.query}
        variables={homepageResult.variables}
        data={homepageResult.data}
        services={services}
      />
    );
  }
}
