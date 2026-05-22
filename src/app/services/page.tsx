import { CTA } from "@/components/homeSections/CTA/CTA";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/homeSections/footer";
import ServicesSec from "@/components/ServicesSections/ServicesSec";
import { Features } from "@/components/homeSections/features/Features";
import { readFile } from "fs/promises";
import path from "path";
import client from "../../../tina/__generated__/client";

export default async function Services() {
  const [homepageContents, settingsContents] = await Promise.all([
    readFile(
      path.join(process.cwd(), "content", "homepage", "index.json"),
      "utf8",
    ),
    readFile(
      path.join(process.cwd(), "content", "global_settings", "settings.json"),
      "utf8",
    ),
  ]);

  const homepageData = JSON.parse(homepageContents);
  const settingsData = JSON.parse(settingsContents);

  let servicesResult;

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
    <div className="relative w-full bg-[#9aae92] ">
      <Nav settings={{ data: settingsData }} />
      <Features issevice={true} homepage={{ data: homepageData }} />
      <ServicesSec services={services} settings={{ data: settingsData }} />
      <CTA homepage={{ data: homepageData }} />
      <Footer settings={{ data: settingsData }} />
    </div>
  );
}
