import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/Users/ayoub/Documents/clients/Biodental/full-website/tina/__generated__/.cache/1780481876946', url: 'http://localhost:4001/graphql', token: 'dummy', queries,  });
export default client;
  