import { CTA } from "@/components/homeSections/CTA/CTA";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/homeSections/footer";
import AboutHero from "@/components/aboutSection/AboutHero";
import { AboutSec } from "@/components/aboutSection/AboutSec";
import Cabinet from "@/components/aboutSection/Cabinet";
import OurHome from "@/components/aboutSection/OurHome";
import Contact from "@/components/aboutSection/Contact";
import SendMessage from "@/components/aboutSection/SendMessage";
import { readFile } from "fs/promises";
import path from "path";

export default async function AboutPage() {
  const [aboutPageContents, settingsContents] = await Promise.all([
    readFile(
      path.join(process.cwd(), "content", "about_page", "index.json"),
      "utf8",
    ),
    readFile(
      path.join(process.cwd(), "content", "global_settings", "settings.json"),
      "utf8",
    ),
  ]);

  const aboutPageData = JSON.parse(aboutPageContents);
  const settingsData = JSON.parse(settingsContents);

  return (
    <div className=" w-full bg-white ">
      <Nav settings={{ data: settingsData }} />
      <AboutHero
        settings={{ data: settingsData }}
        pageContent={aboutPageData}
      />
      <AboutSec pageContent={aboutPageData} />
      <OurHome pageContent={aboutPageData} />
      <Cabinet pageContent={aboutPageData} />
      <Contact settings={{ data: settingsData }} pageContent={aboutPageData} />
      <SendMessage pageContent={aboutPageData} />
      <CTA homepage={{ data: aboutPageData }} />
      <Footer settings={{ data: settingsData }} />
    </div>
  );
}
