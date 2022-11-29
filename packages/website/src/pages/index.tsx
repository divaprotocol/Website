import Image from "next/image";
import { Stack } from "../components/layout/Stack";
import PageLayout from "../components/pageLayout/PageLayout";
import { H } from "../components/typography/H";
import { P } from "../components/typography/P";
import { Button } from "../components/ui/Button";

export type Post = {
  author: string;
  content: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  coverImage: string;
  coverImageDescription: string;
  coverImageWidth: number;
  coverImageHeight: number;
  excerpt: string;
  featured?: boolean;
};

export default function Home() {
  return (
    <PageLayout>
      <Stack className="items-center">
        <Image alt="Background image" src="/bgimg1.png" fill className="z-0 object-cover"  />
        <H as="h1" size="xl">
          Powering the world of Derivatives
        </H>
        <P>
          DIVA Protocol is a decentralized and permissionless piece of
          infrastructure that allows its users to create and settle fully
          customizable financial derivative contracts peer-to-peer.
        </P>
        <Stack vertical className="pt-5">
          <Button>Documentation</Button> <Button>Explore dApps</Button>
        </Stack>
      </Stack>
    </PageLayout>
  );
}
