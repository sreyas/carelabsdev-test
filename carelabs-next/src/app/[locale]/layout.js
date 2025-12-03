import { GET_PAGE_SEO } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";

export async function generateMetadata({ params }) {
  const locale = params?.locale || "en-CA"; // FIXED
  console.log("META LOCALE:", locale);

  try {
    const res = await client.query({
      query: GET_PAGE_SEO,
      variables: { locale },
      fetchPolicy: "no-cache",
    });

    const data = res.data?.homePage?.homeseo;

    if (data) {
      return {
        title: data.metaTitle,
        description: data.metaDescription,
        keywords: data.keywords || undefined,
      };
    }
  } catch (err) {
    console.error("SEO fetch error:", err);
  }

  return {
    title: "Carelabs",
    description: "",
  };
}

export default function Layout({ children}) {
  return <>{children}</>;
}
