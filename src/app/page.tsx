export default async function Home() {
  const res = await fetch("https://api.github.com/repos/bernardfernando/page-counter", { next: { revalidate: 1 } });
  const data = await res.json();

  return <main>{data.stargazers_count}</main>;
}
