export async function fetchProduct(lang: "en" | "bn" = "en") {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: { revalidate: 60 }, // ISR
    }
  );

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}
