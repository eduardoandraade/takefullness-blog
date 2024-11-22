import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc){
        title,
            smallDescription,
                "currentSlug": slug.current,
                    titleImage,
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function AllPosts() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Link href={`/blog/${post.currentSlug}`}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="Image"
              priority
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
          </Link>

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-1 font-semibold">{post.title}</h3>
            <p className="line-clamp-2 text-sm mt-3 text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Ler conteúdo</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
