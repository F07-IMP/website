import Link from "next/link";

type InfoCardProps = {
  title: string;
  content: string;
  imagepath: string;
  href: string;
};

export default function InfoCard({
  title,
  content,
  imagepath,
  href,
}: InfoCardProps) {
  return (
    <Link
      href={href}
      className="group relative block w-full overflow-hidden rounded"
    >
      <img
        src={imagepath}
        alt=""
        className="aspect-4/3 w-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background-accent via-background-accent to-transparent px-6 pb-6 pt-42 text-text">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{content}</p>
      </div>
    </Link>
  );
}
