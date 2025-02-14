import { Metadata } from "next";
import Image from "next/image";
import { articles } from "@/app/data/articles";

// Define separate types for page props and metadata props
type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = articles.find(async (a) => a.id === (await params).id);

  return {
    title: article?.title || "Article Not Found",
    description: article?.shortDescription || "Article not found",
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find(async (a) => a.id === (await params).id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={article.src}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          priority
        />
      </div>

      <h1 className="text-4xl font-serif text-primary mb-4">{article.title}</h1>

      <p className="text-lg text-gray-600 mb-8">{article.shortDescription}</p>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.fullContent }}
      />
    </div>
  );
}
