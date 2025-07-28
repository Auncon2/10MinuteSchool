import Footer from "@/components/Footer";
import MainLayOut from "@/components/MainLayOut";
import Navbar from "@/components/Navbar";
import { fetchProduct } from "@/lib/api";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export default async function Page({
  params,
}: {
  params: { lang: "en" | "bn" };
}) {
  const data = await fetchProduct(params.lang);

  return (
    <main>
      <Navbar lang={params.lang} />
      <MainLayOut data={data} />
      <Footer />
    </main>
  );
}
