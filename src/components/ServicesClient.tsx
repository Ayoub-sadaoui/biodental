"use client";

import React, { useState, useCallback } from "react";
import { useTina } from "tinacms/dist/react";
import { Nav } from "./ui/nav";
import ServicesSec from "./ServicesSections/ServicesSec";
import { Features } from "./homeSections/features/Features";
import { CTA } from "./homeSections/CTA/CTA";

type ServiceQuery = {
  query: string;
  variables: any;
  data: any;
};

type ServicesClientProps = {
  homepageData: any;
  settings: any;
  services: any[];
  serviceQueries?: ServiceQuery[];
};

function TinaServiceForm({
  query,
  variables,
  data,
  index,
  onUpdate,
}: ServiceQuery & {
  index: number;
  onUpdate: (index: number, data: any) => void;
}) {
  const { data: hydratedData } = useTina({ query, variables, data });

  React.useEffect(() => {
    if (hydratedData?.service) {
      onUpdate(index, hydratedData.service);
    }
  }, [hydratedData, index, onUpdate]);

  return null;
}

export default function ServicesClient(props: ServicesClientProps) {
  const featuresSection = props.homepageData?.homepage || {};
  const settingsData = props.settings?.global_settings || {};
  const [hydratedServices, setHydratedServices] = useState<Record<number, any>>(
    {},
  );

  const handleServiceUpdate = useCallback(
    (index: number, data: any) => {
      setHydratedServices((prev) => ({ ...prev, [index]: data }));
    },
    [],
  );

  const services = props.services.map((s, i) => ({
    data: hydratedServices[i] || s.data,
  }));

  return (
    <div className="relative w-full bg-[#9aae92]">
      {props.serviceQueries?.map((sq, i) => (
        <TinaServiceForm
          key={i}
          query={sq.query}
          variables={sq.variables}
          data={sq.data}
          index={i}
          onUpdate={handleServiceUpdate}
        />
      ))}
      <Nav settings={{ data: settingsData }} />
      <Features issevice={true} homepage={{ data: featuresSection }} />
      <ServicesSec services={services} settings={{ data: settingsData }} />
      <CTA homepage={{ data: featuresSection }} settings={{ data: settingsData }} />
    </div>
  );
}
