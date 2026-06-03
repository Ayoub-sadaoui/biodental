export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const Global_SettingsPartsFragmentDoc = gql`
    fragment Global_settingsParts on Global_settings {
  __typename
  logo
  primary_phone
  secondary_phone
  email
  address
  navigation_links {
    __typename
    label
    path
  }
  social_links {
    __typename
    platform
    url
  }
  footer_services
  services_page_title
  footer_text
  footer_credit
  cta_button_label
}
    `;
export const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  __typename
  hero_line_one
  hero_line_one_suffix
  hero_line_two
  hero_line_three
  hero_image_1
  hero_image_2
  hero_image_3
  hero_arrow
  hero_button_label
  hero_phone_label
  about_title
  about_text
  about_image
  features_title
  features {
    __typename
    title
    description
    icon_key
    border_color
  }
  services_title
  reviews_title
  reviews {
    __typename
    avatar
    name
    rating
    text
    platform
  }
  faq_title
  faqs {
    __typename
    question
    answer
  }
  cta_title
  cta_description
  cta_button_label
}
    `;
export const ServicePartsFragmentDoc = gql`
    fragment ServiceParts on Service {
  __typename
  title
  description
  image
  cta_label
}
    `;
export const About_PagePartsFragmentDoc = gql`
    fragment About_pageParts on About_page {
  __typename
  hero_title_prefix
  hero_title_brand
  hero_title_suffix
  hero_button_label
  about_title
  about_text
  about_image
  vision_title
  vision_text
  vision_image
  mission_title
  mission_text
  mission_image
  cabinet_title
  cabinet_images
  send_message_title
  cta_title
  cta_description
  cta_button_label
}
    `;
export const Testimonials_PagePartsFragmentDoc = gql`
    fragment Testimonials_pageParts on Testimonials_page {
  __typename
  hero_title_line_one
  hero_title_highlight
  hero_title_line_two
  hero_title_line_three
  hero_description
  hero_button_label
  hero_image_1
  hero_image_2
  hero_image_3
  before_after_title
  before_after_pairs {
    __typename
    before_image
    after_image
    before_alt
    after_alt
  }
  more_title
  more_panels {
    __typename
    kind
    src
    poster
    alt
  }
}
    `;
export const Global_SettingsDocument = gql`
    query global_settings($relativePath: String!) {
  global_settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Global_settingsParts
  }
}
    ${Global_SettingsPartsFragmentDoc}`;
export const Global_SettingsConnectionDocument = gql`
    query global_settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Global_settingsFilter) {
  global_settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Global_settingsParts
      }
    }
  }
}
    ${Global_SettingsPartsFragmentDoc}`;
export const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
export const ServiceDocument = gql`
    query service($relativePath: String!) {
  service(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServiceParts
  }
}
    ${ServicePartsFragmentDoc}`;
export const ServiceConnectionDocument = gql`
    query serviceConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServiceFilter) {
  serviceConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServiceParts
      }
    }
  }
}
    ${ServicePartsFragmentDoc}`;
export const About_PageDocument = gql`
    query about_page($relativePath: String!) {
  about_page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...About_pageParts
  }
}
    ${About_PagePartsFragmentDoc}`;
export const About_PageConnectionDocument = gql`
    query about_pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: About_pageFilter) {
  about_pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...About_pageParts
      }
    }
  }
}
    ${About_PagePartsFragmentDoc}`;
export const Testimonials_PageDocument = gql`
    query testimonials_page($relativePath: String!) {
  testimonials_page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Testimonials_pageParts
  }
}
    ${Testimonials_PagePartsFragmentDoc}`;
export const Testimonials_PageConnectionDocument = gql`
    query testimonials_pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Testimonials_pageFilter) {
  testimonials_pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Testimonials_pageParts
      }
    }
  }
}
    ${Testimonials_PagePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    global_settings(variables, options) {
      return requester(Global_SettingsDocument, variables, options);
    },
    global_settingsConnection(variables, options) {
      return requester(Global_SettingsConnectionDocument, variables, options);
    },
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    service(variables, options) {
      return requester(ServiceDocument, variables, options);
    },
    serviceConnection(variables, options) {
      return requester(ServiceConnectionDocument, variables, options);
    },
    about_page(variables, options) {
      return requester(About_PageDocument, variables, options);
    },
    about_pageConnection(variables, options) {
      return requester(About_PageConnectionDocument, variables, options);
    },
    testimonials_page(variables, options) {
      return requester(Testimonials_PageDocument, variables, options);
    },
    testimonials_pageConnection(variables, options) {
      return requester(Testimonials_PageConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/dummy-client-id/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
