"use client";
import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreBtn({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    console.log("clicked read more");
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    console.log("query strinG" + queryString);
    const url = `/article?${queryString}`;
    console.log("url1 " + url);
    router.push(url);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-green-400 h-10 rounded-b-lg dark:text-gray-900"
    >
      Read More
    </button>
  );
}

export default ReadMoreBtn;
