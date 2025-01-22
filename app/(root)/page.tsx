import SearchForm from "@/components/SearchForm";
// import { auth } from "@/auth";
import Image from "next/image";
import { samplePosts } from "@/constants/postData";
import PostCard, { StartupTypeCard } from "@/components/PostCards";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { Startup, Author } from "@/sanity/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  // const session = await auth();

  // Filter posts based on search query if provided
  // const filteredPosts = query
  //   ? samplePosts.filter(post =>
  //     post.title.toLowerCase().includes(query.toLowerCase()) ||
  //     post.description.toLowerCase().includes(query.toLowerCase())
  //   )
  //   : samplePosts;
  // const params = { search: query || null }

  // get posts from sanity client
  const myPost = await client.fetch(STARTUPS_QUERY)
  console.log(JSON.stringify(myPost, null, 2))

  return (
    <>
      <section className="pink_container !bg-black relative">
        <h1 className="heading">
          Honesty and Legit, <br />
          Information is the key
        </h1>
        <Image
          src="/camLogo.png"
          alt="cam-logo"
          width={50}
          height={50}
          className="absolute left-[40%] top-3 bg-black rounded-full"
        />

        <p className="sub-heading !max-w-3xl">
          The Truth Shall Set You Free.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold !text-white">

          {query
            ? `Search results for "${query}"`
            : "Latest Posts"
          }
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {myPost.length > 0 ? (
            myPost.map((post: StartupTypeCard) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              No posts found
            </p>
          )}
        </div>
      </section>
    </>
  );
}