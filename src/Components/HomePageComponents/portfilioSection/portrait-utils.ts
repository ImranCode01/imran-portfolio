export async function makeTransparentPng(imageUrl: string): Promise<Blob> {
  // Loaded on demand from a CDN, so it does not need to be installed as a package.
  const moduleUrl =
    "https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.4.5/+esm";
  // @ts-ignore - this external ESM module is loaded from its CDN URL at runtime.
  const { removeBackground } = await import(/* @vite-ignore */ moduleUrl);

  return removeBackground(imageUrl, {
    output: { format: "image/png" },
  });
}
