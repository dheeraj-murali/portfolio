import { Layout } from "components/common/Layout";
import { Link } from "components/common/Link";
import fs from "fs";
import matter from "gray-matter";
import { getAllPosts } from "lib/getPosts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import { FaBackward } from "react-icons/fa";

export default function BlogPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Link to="/" label="go back" className="my-10 justify-start">
        <FaBackward />
        <span>Back</span>
      </Link>

      <article className="mx-auto prose prose-lg dark:prose-dark">
        <MDXRemote {...source} />
      </article>

      <Link to="/" label="go back" className="my-10 justify-start">
        <FaBackward />
        <span>Back</span>
      </Link>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: {
    [key: string]: any;
  };
}> = async ({ params }) => {
  const source = fs.readFileSync(
    join(process.cwd(), "src/_blog", `${params?.slug}.mdx`),
    "utf8"
  );
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
};

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
