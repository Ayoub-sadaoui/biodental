"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import { Hero } from "./homeSections/hero/hero";
import { About } from "./homeSections/about/about";
import { Features } from "./homeSections/features/Features";
import { Services } from "./homeSections/services/Services";
import { Reviews } from "./homeSections/reviews/page";
import { FAQ } from "./homeSections/FAQ/FAQ";
import { CTA } from "./homeSections/CTA/CTA";

type HomeClientProps = {
  query: string;
  variables: any;
  data: any;
  services: any[];
};

export default function HomeClient(props: HomeClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const homepage = { data: data.homepage };

  return (
    <div className="w-full bg-[#F7F7F5]">
      <div className="relative">
        <div className="w-full bg-[#F7F7F5] overflow-hidden">
          {/* Header Section */}
          <div className="w-full">
            <Hero homepage={homepage} />
          </div>
          {/* About Section */}
          <About homepage={homepage} />
          {/* Features Section */}
          <Features homepage={homepage} />
          {/* Services Section */}
          <Services homepage={homepage} services={props.services} />
          {/* Reviews Section */}
          <Reviews homepage={homepage} />
          {/* FAQ Section */}
          <FAQ homepage={homepage} />
        </div>
      </div>
      {/* CTA Section */}
      <CTA homepage={homepage} />
    </div>
  );
}
