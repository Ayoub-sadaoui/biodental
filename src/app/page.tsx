import React from "react";
import HomeClient from "../components/HomeClient";
import { readFile, readdir } from "fs/promises";
import path from "path";

export default async function Page() {
  try {
    const homepageFile = path.join(
      process.cwd(),
      "content",
      "homepage",
      "index.json",
    );
    const servicesDir = path.join(process.cwd(), "content", "services");

    const [homepageContents, serviceFiles] = await Promise.all([
      readFile(homepageFile, "utf8"),
      readdir(servicesDir),
    ]);

    // Read the checked-in Tina content file directly so rich-text fields stay intact.
    const homepageData = JSON.parse(homepageContents);
    const sortedServiceFiles = serviceFiles
      .filter((file) => file.endsWith(".json"))
      .sort((a, b) => a.localeCompare(b));
    const servicesContents = await Promise.all(
      sortedServiceFiles.map((file) =>
        readFile(path.join(servicesDir, file), "utf8"),
      ),
    );
    const services = servicesContents.map((content) => ({
      data: JSON.parse(content),
    }));

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
