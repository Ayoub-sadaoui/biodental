import "./globals.css";
import { Footer } from "../components/homeSections/footer/footer";
import { Nav } from "../components/ui/nav";
import { readFile } from "fs/promises";
import path from "path";
import { DEFAULT_PHONE_NUMBERS } from "../lib/siteContent";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settingsData;
  try {
    const settingsContents = await readFile(
      path.join(process.cwd(), "content", "global_settings", "settings.json"),
      "utf8",
    );
    settingsData = JSON.parse(settingsContents);
  } catch (error) {
    console.error("Failed to read global settings from disk", error);
    settingsData = {
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
