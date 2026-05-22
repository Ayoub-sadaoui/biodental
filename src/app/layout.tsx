import "./globals.css";
import { Footer } from "../components/homeSections/footer/footer";
import { Nav } from "../components/ui/nav";
import client from "../../tina/__generated__/client";
import { DEFAULT_PHONE_NUMBERS } from "../lib/siteContent";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settingsResult;
  try {
    settingsResult = await client.queries.global_settings({
      relativePath: "settings.json",
    });
  } catch (error) {
    console.error("Failed to fetch global settings from Tina", error);
    settingsResult = {
      data: {
        global_settings: {
          logo: "/logo.png",
          primary_phone: DEFAULT_PHONE_NUMBERS[0],
          secondary_phone: DEFAULT_PHONE_NUMBERS[1],
          email: "biodental.dr.fetnaci@gmail.com",
          address: "Annaba, Algérie",
          footer_text:
            "© BioDental clinic 2024 | Privacy Policy | Accessibility Statement",
          cta_button_label: "Prendre rendez-vous",
          navigation_links: [],
          social_links: [],
        },
      },
    };
  }

  const settings = {
    data: settingsResult?.data?.global_settings || null,
  };

  return (
    <html lang="en">
      <body>
        <Nav settings={settings} />
        {children}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
