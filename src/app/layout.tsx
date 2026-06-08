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
  let settingsData;
  try {
    const settingsRes = await client.queries.global_settings({
      relativePath: "settings.json",
    });
    settingsData = settingsRes.data.global_settings;
  } catch (error) {
    console.error("Failed to fetch global settings", error);
    settingsData = {
      logo: "/uploads/logo.png",
      primary_phone: DEFAULT_PHONE_NUMBERS[0],
      secondary_phone: DEFAULT_PHONE_NUMBERS[1],
      email: "biodental.dr.fetnaci@gmail.com",
      address: "Annaba, Algérie",
      footer_text:
        "© BioDental clinic 2024 | Privacy Policy | Accessibility Statement",
      cta_button_label: "Prendre rendez-vous",
      navigation_links: [],
      social_links: [],
    };
  }

  const settings = {
    data: settingsData || null,
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
