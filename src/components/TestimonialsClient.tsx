"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import { Nav } from "./ui/nav";
import { Footer } from "./homeSections/footer/footer";
import { Reviews } from "./homeSections/reviews/page";
import {
  TestimonialHeroSection,
  GallerySection,
  MoreImagesSection,
} from "./testimonialSections";
import { CTA } from "./homeSections/CTA/CTA";

type TestimonialsClientProps = {
  query: string;
  variables: any;
  data: any;
  homepage: any;
  settings: any;
};

export default function TestimonialsClient(props: TestimonialsClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const pageContent = data?.testimonials_page || {};
  const homepageData = props.homepage?.homepage || {};
  const settingsData = props.settings?.global_settings || {};

  return (
    <div className="relative w-full bg-[#F7F7F5]">
      <Nav settings={{ data: settingsData }} />
      <TestimonialHeroSection
        settings={{ data: settingsData }}
        pageContent={pageContent}
      />
      <Reviews homepage={{ data: homepageData }} />
      <GallerySection pageContent={pageContent} />
      <MoreImagesSection pageContent={pageContent} />
      <CTA homepage={{ data: homepageData }} />
      <Footer settings={{ data: settingsData }} />
    </div>
  );
}
