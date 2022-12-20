import Image from "next/image";

export function Avatar({ src, name }: { src: string; name: string; }) {
  return (
    <figure className="text-center justify-center flex flex-col items-center space-y-6">
      <Image
        className="rounded-full p-3 bg-white bg-opacity-10"
        src={src}
        width={120}
        height={120}
        alt={name} />
      <caption className="text-white">{name}</caption>
    </figure>
  );
}
