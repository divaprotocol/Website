import Image from "next/image"
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex flex-row justify-between w-full relative z-10 px-12">
      <span>
        <Image alt="Diva Logo" src="/DIVALogo.png" width={131} height={24} />
      </span>
      <ul className="space-x-4 flex flex-row">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/dApps">dApps</Link>
        </li>
        <li>
          <Link target={"_blank"} href="https://docs.divaprotocol.io/">
            dApps
          </Link>
        </li>
        <li>
          <Link href="/token">Token</Link>
        </li>
        <li>
          <Link href="/posts">Blog</Link>
        </li>
        {/**
         * ADD COMMUNITYY
         */}
      </ul>
    </nav>
  );
};