import { GET_PAGE_SEO } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";

export default async function Layout({ children, params }) {
    console.log("PARA",params);
    
  const { locale } = params; // Server-side only
  console.log("SERVER locale:", locale);

  let seo = { metaTitle: "Carelabs | My Brand", metaDescription: "", keywords: "" };

  try {
    const res = await client.query({
      query: GET_PAGE_SEO,
      variables: { locale },
      fetchPolicy: "no-cache",
    });

    const data = res.data?.homePage?.homeseo;
    if (data) {
      seo = {
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        keywords: data.keywords || "",
      };
    }
  } catch (err) {
    console.error("SEO fetch error:", err);
  }

  return (
    <>
      <head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      </head>

      {children}
    </>
  );
}
