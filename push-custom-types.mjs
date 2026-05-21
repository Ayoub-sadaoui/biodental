#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const REPO_NAME = "biodental-clinic";
const CONFIG_PATH = path.join(os.homedir(), ".prismic");

// Read the auth token from local Prismic config
function readAuthToken() {
  try {
    // Prefer explicit env var for CI and safety
    if (process.env.PRISMIC_AUTH_TOKEN) return process.env.PRISMIC_AUTH_TOKEN;

    const configFile = path.join(CONFIG_PATH, "auth");
    if (fs.existsSync(configFile)) {
      console.log("Found auth token file at", configFile);
      const content = fs.readFileSync(configFile, "utf8").trim();
      return content;
    }
  } catch (e) {
    console.error("Could not read auth token:", e.message);
  }
  return null;
}

// Push a single custom type
async function pushCustomType(type, name) {
  const token = readAuthToken();
  if (!token) {
    throw new Error(
      "No auth token found. Run: npx prismic login first, then try again.",
    );
  }

  const filePath = path.join(__dirname, "customtypes", type, "index.json");
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const customType = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const url = `https://customtypes.prismic.io/customtypes/${REPO_NAME}/${type}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Repository: REPO_NAME,
    },
    body: JSON.stringify(customType),
  };

  console.log(`Pushing ${name}...`);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP ${response.status}: ${errorText || response.statusText}`,
      );
    }

    const result = await response.json();
    console.log(`✓ ${name} pushed successfully`);
    return result;
  } catch (error) {
    console.error(`✗ Failed to push ${name}:`, error.message);
    throw error;
  }
}

// Main
async function main() {
  console.log(`Pushing custom types to repo: ${REPO_NAME}\n`);

  const types = [
    { id: "global_settings", name: "Global Settings" },
    { id: "homepage", name: "Homepage" },
    { id: "service", name: "Service" },
  ];

  let success = 0;
  let failed = 0;

  const tokenCheck = readAuthToken();
  console.log(tokenCheck ? "Auth token: available" : "Auth token: NOT found");

  for (const type of types) {
    try {
      await pushCustomType(type.id, type.name);
      success++;
    } catch (error) {
      console.error(`Error pushing ${type.name}:`, error.message || error);
      failed++;
    }
  }

  console.log(`\nResults: ${success} pushed, ${failed} failed`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
