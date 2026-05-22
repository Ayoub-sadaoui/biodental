import { CTA } from "@/components/homeSections/CTA/CTA";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/homeSections/footer";
import ServicesSec from "@/components/ServicesSections/ServicesSec";
import { Features } from "@/components/homeSections/features/Features";
import { readFile, readdir } from "fs/promises";
import path from "path";

export default async function Services() {
  const servicesDir = path.join(process.cwd(), "content", "services");

  const [homepageContents, settingsContents, serviceFiles] = await Promise.all([
    readFile(
      path.join(process.cwd(), "content", "homepage", "index.json"),
      "utf8",
    ),
    readFile(
      path.join(process.cwd(), "content", "global_settings", "settings.json"),
      "utf8",
    ),
    readdir(servicesDir),
  ]);

  const homepageData = JSON.parse(homepageContents);
  const settingsData = JSON.parse(settingsContents);
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
    <div className="relative w-full bg-[#9aae92] ">
      <Nav settings={{ data: settingsData }} />
      <Features issevice={true} homepage={{ data: homepageData }} />
      <ServicesSec services={services} settings={{ data: settingsData }} />
      <CTA homepage={{ data: homepageData }} />
      <Footer settings={{ data: settingsData }} />
    </div>
  );
}
