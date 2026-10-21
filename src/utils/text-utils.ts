/**
 * Collapse all whitespace and truncate a text for use in meta descriptions.
 * Counting by code point keeps emoji / CJK characters intact.
 */
export function summarize(text: string, maxLength = 160): string {
	const plain = text.replace(/\s+/g, " ").trim();
	if (!plain) return "";

	const characters = Array.from(plain);
	if (characters.length <= maxLength) return plain;

	return `${characters.slice(0, maxLength).join("").trimEnd()}…`;
}
