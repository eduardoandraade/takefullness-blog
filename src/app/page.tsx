import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/app/lib/sanity";
import { heroImage } from "./lib/interface";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'heroImage'][0]{ 
    image1,
      image2
      }`;

  const data = await client.fetch(query);

  return data;
}


export default async function Home() {
  const data: heroImage = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-12 lg:pt-24">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl dark:text-gray-100">
            Respire e abraçe o momento presente, acalme-se.
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Por aqui vamos trazer todo tipo de informações sobre saúde e
            qualidade de vida de uma maneira útil, didática e criativa.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image2).url()}
              alt="Foto 1"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image1).url()}
              alt="Foto 2"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/post"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Blog
          </Link>
          <Link
            href="/recado"
            className="flex w-2/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Deixe um recado :)
          </Link>
        </div>
      </div>
    </section>
  );
}
