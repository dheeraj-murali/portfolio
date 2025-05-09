const modules = import.meta.glob("../assets/blog/*.mdx", { eager: true });

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  component: React.ReactNode;
};

export const getPosts = (): Post[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  return Object.entries(modules).map(([_path, mod]: any) => ({
    slug: mod.slug,
    title: mod.title,
    date: mod.date,
    description: mod.description,
    component: mod.default,
  }));
};
