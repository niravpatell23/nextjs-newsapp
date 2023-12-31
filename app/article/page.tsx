"use client";
import { notFound } from "next/navigation";
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  console.log("search paraams : " + JSON.stringify(searchParams));
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    console.log("here i am at not found");
    return notFound();
  }
  console.log("search " + searchParams);
  const article: Article = searchParams;
  console.log("here i amagain " + article.title);
  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className="h-52 max-w-md mx-auto md:max-w-lg lg:max-w-xl"
            src={article.image}
            alt={article.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {article.author}</h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
