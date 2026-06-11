"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";
import { Nav } from "./ui/nav";
import AboutHero from "./aboutSection/AboutHero";
import { AboutSec } from "./aboutSection/AboutSec";
import Cabinet from "./aboutSection/Cabinet";
import OurHome from "./aboutSection/OurHome";
import Contact from "./aboutSection/Contact";
import SendMessage from "./aboutSection/SendMessage";
import { CTA } from "./homeSections/CTA/CTA";

type AboutClientProps = {
  query: string;
  variables: any;
  data: any;
  settings: any;
};

export default function AboutClient(props: AboutClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const pageContent = data?.about_page || {};
  const settingsData = props.settings?.global_settings || {};

  return (
    <div className="w-full bg-white">
      <Nav settings={{ data: settingsData }} />
      <AboutHero
        settings={{ data: settingsData }}
        pageContent={pageContent}
      />
      <AboutSec pageContent={pageContent} />
      <OurHome pageContent={pageContent} />
      <Cabinet pageContent={pageContent} />
      <Contact settings={{ data: settingsData }} pageContent={pageContent} />
      <SendMessage pageContent={pageContent} />
      <CTA homepage={{ data: pageContent }} settings={{ data: settingsData }} />
    </div>
  );
}
