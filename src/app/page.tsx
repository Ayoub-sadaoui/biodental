import React from "react";
import HomeClient from "../components/HomeClient";
import client from "../../tina/__generated__/client";

export default async function Page() {
  let homepageResult;
  let servicesResult;

  try {
    // Fetch homepage content from Tina CMS
    homepageResult = await client.queries.homepage({
      relativePath: "index.json",
    });
  } catch (error) {
    console.error("Failed to fetch homepage data from Tina CMS", error);
    // Provide an empty structure so HomeClient doesn't crash
    homepageResult = {
      query: "",
      variables: {},
      data: { homepage: {} },
    };
  }

  try {
    // Fetch repeatable service records
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
      query={homepageResult.query}
      variables={homepageResult.variables}
      data={homepageResult.data}
      services={services}
    />
  );
}
