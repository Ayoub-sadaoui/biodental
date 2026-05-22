import { Footer } from "../../components/homeSections/footer/footer";
import { Nav } from "../../components/ui/nav";
import { Reviews } from "@/components/homeSections/reviews/page";

import {
  TestimonialHeroSection,
  GallerySection,
  MoreImagesSection,
} from "../../components/testimonialSections";
import { CTA } from "../../components/homeSections/CTA/CTA";

import { readFile } from "fs/promises";
import path from "path";

export default async function TestimonialsPage() {
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
  const testimonialsPageContents = await readFile(
    path.join(process.cwd(), "content", "testimonials_page", "index.json"),
    "utf8",
  );
  const testimonialsPageData = JSON.parse(testimonialsPageContents);

  return (
    <div className="relative w-full bg-[#F7F7F5]">
      <Nav settings={{ data: settingsData }} />
      <TestimonialHeroSection
        settings={{ data: settingsData }}
        pageContent={testimonialsPageData}
      />
      <Reviews homepage={{ data: homepageData }} />
      <GallerySection pageContent={testimonialsPageData} />
      <MoreImagesSection pageContent={testimonialsPageData} />
      <CTA homepage={{ data: homepageData }} />
      <Footer settings={{ data: settingsData }} />
    </div>
  );
}
