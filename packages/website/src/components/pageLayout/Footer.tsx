import { Stack } from "../layout/Stack";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-32 text-white font-sans text-opacity-80">
      <Stack
        vertical
        className="space-x-16 justify-between px-20 py-10 border-b border-white border-opacity-10"
      >
        <Image src="/DivaLogo.svg" height="136" width="136" alt="Diva Logo" />
        <Stack vertical className="space-x-10 flex-wrap">
          <span>About us</span>
          <span>Docs</span>
          <span>Token</span>
          <span>Blog</span>
          <span>Whitepaper</span>
          <span>DIVA Slide Deck</span>
          <span>Peckshield Audit</span>
        </Stack>
      </Stack>
      <Stack vertical className="space-x-16 justify-between px-20 py-10">
        <span>© DIVA Finance</span>
        <Stack vertical>
          <Link href="">
            <Image
              src="/logos/twitter.svg"
              height="24"
              width="24"
              alt="Twitter"
            />
          </Link>

          <Link href="">
            <Image
              src="/logos/discord.svg"
              height="27"
              width="27"
              alt="Discord"
            />
          </Link>
          <Link href="">
            <Image
              src="/logos/github.svg"
              height="22"
              width="22"
              alt="Github"
            />
          </Link>
        </Stack>
      </Stack>
    </footer>
  );
}
