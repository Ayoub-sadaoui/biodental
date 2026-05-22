import { defineConfig } from "tinacms";

// Your hosting provider branch config
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.HEAD || "main";

export default defineConfig({
  branch,

  // Get this from tina.io in production
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  // Get this from tina.io in production
  token: process.env.TINA_TOKEN || "dummy-token",

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See https://tina.io/docs/schema/ for more information
  schema: {
    collections: [
      {
        name: "global_settings",
        label: "Global Settings",
        path: "content/global_settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "image",
            name: "logo",
            label: "Clinic Logo",
          },
          {
            type: "string",
            name: "primary_phone",
            label: "Primary Phone Number",
          },
          {
            type: "string",
            name: "secondary_phone",
            label: "Secondary Phone Number",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "address",
            label: "Physical Address",
          },
          {
            type: "object",
            name: "navigation_links",
            label: "Navigation Links",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label || "Link" };
              },
            },
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "string",
                name: "path",
                label: "Path (e.g. /about, /services)",
              },
            ],
          },
          {
            type: "object",
            name: "social_links",
            label: "Social Media Links",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.platform || "Social Link" };
              },
            },
            fields: [
              {
                type: "string",
                name: "platform",
                label: "Platform",
                options: ["facebook", "instagram", "tiktok"],
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
            ],
          },
          {
            type: "string",
            name: "footer_services",
            label: "Footer Services",
            list: true,
          },
          {
            type: "string",
            name: "services_page_title",
            label: "Services Page Title",
          },
          {
            type: "string",
            name: "footer_text",
            label: "Footer Copyright Copy",
          },
          {
            type: "string",
            name: "footer_credit",
            label: "Footer Credit Line",
          },
          {
            type: "string",
            name: "cta_button_label",
            label: "CTA Button Label",
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage Content",
        path: "content/homepage",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "hero_line_one",
            label: "Hero Line One",
          },
          {
            type: "string",
            name: "hero_line_one_suffix",
            label: "Hero Line One Suffix (Colored/Italic, e.g. Sourire)",
          },
          {
            type: "string",
            name: "hero_line_two",
            label: "Hero Line Two",
          },
          {
            type: "string",
            name: "hero_line_three",
            label: "Hero Line Three",
          },
          {
            type: "image",
            name: "hero_image_1",
            label: "Hero Inline Image 1",
          },
          {
            type: "image",
            name: "hero_image_2",
            label: "Hero Inline Image 2",
          },
          {
            type: "image",
            name: "hero_image_3",
            label: "Hero Inline Image 3",
          },
          {
            type: "image",
            name: "hero_arrow",
            label: "Hero Sparkle / Decorative Arrow",
          },
          {
            type: "string",
            name: "hero_button_label",
            label: "Hero CTA Button Label",
          },
          {
            type: "string",
            name: "hero_phone_label",
            label: "Hero Phone Popup Label",
          },
          {
            type: "string",
            name: "about_title",
            label: "About Section Title",
          },
          {
            type: "rich-text",
            name: "about_text",
            label: "About Narrative Copy",
          },
          {
            type: "image",
            name: "about_image",
            label: "About Section Portrait",
          },
          {
            type: "string",
            name: "features_title",
            label: "Features Section Title",
          },
          {
            type: "object",
            name: "features",
            label: "Why Choose Us Cards",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Feature Card" };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Card Title",
              },
              {
                type: "rich-text",
                name: "description",
                label: "Card Description",
              },
              {
                type: "string",
                name: "icon_key",
                label: "Hover Icon Key",
                options: ["health", "flower", "dentist", "yoga"],
              },
              {
                type: "string",
                name: "border_color",
                label: "Border Style Token",
              },
            ],
          },
          {
            type: "string",
            name: "services_title",
            label: "Services Grid Heading",
          },
          {
            type: "string",
            name: "reviews_title",
            label: "Reviews Section Title",
          },
          {
            type: "object",
            name: "reviews",
            label: "Patient Testimonials",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "Patient Review" };
              },
            },
            fields: [
              {
                type: "image",
                name: "avatar",
                label: "Reviewer Profile Picture",
              },
              {
                type: "string",
                name: "name",
                label: "Reviewer Name",
              },
              {
                type: "number",
                name: "rating",
                label: "Stars (1-5)",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Review Body Text",
              },
              {
                type: "string",
                name: "platform",
                label: "Platform Icon",
                options: ["google", "instagram", "facebook"],
              },
            ],
          },
          {
            type: "string",
            name: "faq_title",
            label: "FAQ Heading",
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQ Questions and Answers",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.question || "FAQ Item" };
              },
            },
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question Text",
              },
              {
                type: "rich-text",
                name: "answer",
                label: "Answer Body Text",
              },
            ],
          },
          {
            type: "string",
            name: "cta_title",
            label: "Bottom CTA Banner Heading",
          },
          {
            type: "string",
            name: "cta_description",
            label: "Bottom CTA Banner Subheading",
          },
          {
            type: "string",
            name: "cta_button_label",
            label: "Bottom CTA Button Copy",
          },
        ],
      },
      {
        name: "service",
        label: "Services Offered",
        path: "content/services",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Brief Description (shown on card)",
          },
          {
            type: "image",
            name: "image",
            label: "Card Image",
          },
          {
            type: "string",
            name: "cta_label",
            label: "Learn More Link Label",
          },
        ],
      },
      {
        name: "about_page",
        label: "About Page",
        path: "content/about_page",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "hero_title_prefix",
            label: "Hero Title Prefix",
          },
          {
            type: "string",
            name: "hero_title_brand",
            label: "Hero Title Brand",
          },
          {
            type: "string",
            name: "hero_title_suffix",
            label: "Hero Title Suffix",
          },
          {
            type: "string",
            name: "hero_button_label",
            label: "Hero Button Label",
          },
          { type: "string", name: "about_title", label: "About Section Title" },
          {
            type: "rich-text",
            name: "about_text",
            label: "About Narrative Copy",
          },
          {
            type: "image",
            name: "about_image",
            label: "About Section Portrait",
          },
          { type: "string", name: "vision_title", label: "Vision Title" },
          { type: "string", name: "vision_text", label: "Vision Text" },
          { type: "image", name: "vision_image", label: "Vision Image" },
          { type: "string", name: "mission_title", label: "Mission Title" },
          { type: "string", name: "mission_text", label: "Mission Text" },
          { type: "image", name: "mission_image", label: "Mission Image" },
          { type: "string", name: "cabinet_title", label: "Cabinet Title" },
          {
            type: "string",
            name: "cabinet_images",
            label: "Cabinet Images",
            list: true,
          },
          {
            type: "string",
            name: "send_message_title",
            label: "Send Message Title",
          },
          { type: "string", name: "cta_title", label: "CTA Title" },
          { type: "string", name: "cta_description", label: "CTA Description" },
          {
            type: "string",
            name: "cta_button_label",
            label: "CTA Button Label",
          },
        ],
      },
      {
        name: "testimonials_page",
        label: "Testimonials Page",
        path: "content/testimonials_page",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "hero_title_line_one",
            label: "Hero Title Line One",
          },
          {
            type: "string",
            name: "hero_title_highlight",
            label: "Hero Title Highlight",
          },
          {
            type: "string",
            name: "hero_title_line_two",
            label: "Hero Title Line Two",
          },
          {
            type: "string",
            name: "hero_title_line_three",
            label: "Hero Title Line Three",
          },
          {
            type: "string",
            name: "hero_description",
            label: "Hero Description",
          },
          {
            type: "string",
            name: "hero_button_label",
            label: "Hero Button Label",
          },
          {
            type: "image",
            name: "hero_image_1",
            label: "Hero Image 1",
          },
          {
            type: "image",
            name: "hero_image_2",
            label: "Hero Image 2",
          },
          {
            type: "image",
            name: "hero_image_3",
            label: "Hero Image 3",
          },
          {
            type: "string",
            name: "before_after_title",
            label: "Before/After Section Title",
          },
          {
            type: "object",
            name: "before_after_pairs",
            label: "Before/After Pairs",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.before_alt || "Before/After Pair" };
              },
            },
            fields: [
              {
                type: "image",
                name: "before_image",
                label: "Before Image",
              },
              {
                type: "image",
                name: "after_image",
                label: "After Image",
              },
              {
                type: "string",
                name: "before_alt",
                label: "Before Alt Text",
              },
              {
                type: "string",
                name: "after_alt",
                label: "After Alt Text",
              },
            ],
          },
          {
            type: "string",
            name: "more_title",
            label: "More Media Section Title",
          },
          {
            type: "object",
            name: "more_panels",
            label: "More Media Panels",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.alt || item?.kind || "Media Panel" };
              },
            },
            fields: [
              {
                type: "string",
                name: "kind",
                label: "Panel Kind",
                options: ["image", "video"],
              },
              {
                type: "string",
                name: "src",
                label: "Source Path",
              },
              {
                type: "string",
                name: "poster",
                label: "Video Poster Path",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
            ],
          },
        ],
      },
    ],
  },
});
