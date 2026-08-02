import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export const dynamic = "force-dynamic";

const BASE_URL = "https://etomidatehub.com";

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteImage(image) {
  if (!image) return `${BASE_URL}/logo.svg`;
  if (image.startsWith("http")) return image;
  return `${BASE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

export async function GET() {
  await dbConnect();
  const products = await Product.find({ inStock: true }).lean();

  const items = [];

  for (const p of products) {
    const productUrl = `${BASE_URL}/shop/${p.slug}`;
    const image = absoluteImage(p.image);
    const availability = p.inStock ? "in_stock" : "out_of_stock";
    const description = escapeXml(p.shortDescription || p.description || p.name);
    const title = escapeXml(p.name);

    // If the product has size/quantity variants, emit one feed item per variant
    // (Google Merchant requires a single price per item, so variants become
    // grouped items sharing an item_group_id).
    const variants = p.sizes && p.sizes.length > 0 ? p.sizes : [{ label: "", price: p.price }];

    variants.forEach((variant, i) => {
      const id = variant.label ? `${p.slug}-${variant.label.toLowerCase().replace(/\s+/g, "")}` : p.slug;
      const variantTitle = variant.label ? `${title} - ${escapeXml(variant.label)}` : title;
      const price = (variant.price ?? p.price).toFixed(2);

      items.push(`
    <item>
      <g:id>${escapeXml(id)}</g:id>
      <g:item_group_id>${escapeXml(p.slug)}</g:item_group_id>
      <title>${variantTitle}</title>
      <description>${description}</description>
      <link>${productUrl}</link>
      <g:image_link>${image}</g:image_link>
      <g:availability>${availability}</g:availability>
      <g:price>${price} EUR</g:price>
      <g:condition>new</g:condition>
      <g:brand>Etomidatehub</g:brand>
      <g:product_type>${escapeXml(p.category)}</g:product_type>
      ${variant.label ? `<g:size>${escapeXml(variant.label)}</g:size>` : ""}
    </item>`);
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Etomidatehub Product Feed</title>
    <link>${BASE_URL}</link>
    <description>Product feed for Etomidatehub.com</description>${items.join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
