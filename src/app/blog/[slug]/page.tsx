import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;


async function getData(slug: string) {
  const query = `
        *[_type == 'blog' && slug.current == '${slug}'] {
            'currentSlug': slug.current,
                title,
                content,
                titleImage,
        }[0]
    `;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-blue-800 dark:text-primary font-semibold tracking-wide">
          TakeFullness — Post Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

        {/* Imagem */}
        <div className="flex justify-center mt-8">
        <Image
          src={urlFor(data.titleImage).url()}
          priority
          alt="Title Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-4xl h-[350px] object-cover rounded-lg"
        />
      </div>

      {/* Texto */}
      <div className="prose prose-blue prose-xl mt-4 dark:prose-invert prose-headings:italic max-w-4xl mx-auto prose-li:marker:text-blue-800 dark:prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>

  );
}
