/**
 * Recursively extracts plain text from a Tina rich-text AST or string.
 */
export function extractPlainText(value: any): string {
  if (!value) return "";
  if (typeof value === "string") return value;

  // Tina Rich Text AST
  if (
    typeof value === "object" &&
    value.type === "root" &&
    Array.isArray(value.children)
  ) {
    return value.children.map(extractPlainText).join("\n");
  }

  // Tina node inside AST or generic node with text
  if (typeof value === "object" && value.text !== undefined) {
    return value.text;
  }

  // Tina generic block or node with children
  if (typeof value === "object" && Array.isArray(value.children)) {
    return value.children.map(extractPlainText).join("");
  }

  return "";
}

/**
 * Resolves an image source from Tina content.
 */
export function resolveImage(imageField: any, fallback: string = ""): string {
  if (!imageField) return fallback;
  if (typeof imageField === "string") return imageField;
  if (typeof imageField === "object" && imageField.url) return imageField.url;
  return fallback;
}
