import Image from "next/image";
import { Stack } from "../components/layout/Stack";
import PageLayout from "../components/pageLayout/PageLayout";
import { Heading } from "../components/typography/Heading";
import { Highlight } from "../components/typography/Highlight";
import { Paragraph } from "../components/typography/Paragraph";
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
      <Image
        alt="Background image"
        src="/bgimg1.png"
        fill
        className="object-cover z-0"
      />
      <div className="relative h-screen">
        <Stack className="items-center relative tecxt-center">
          <Heading as="h1" size="xl">
            Powering the world of <Highlight>Derivatives</Highlight>
          </Heading>
          <Paragraph className="text-center">
            DIVA Protocol is a decentralized and permissionless piece of
            infrastructure that allows its users to create and settle fully
            customizable financial derivative contracts peer-to-peer.
          </Paragraph>
          <Stack vertical className="pt-5">
            <Button primary>Documentation</Button>{" "}
            <Button>Explore dApps</Button>
          </Stack>
        </Stack>
      </div>
      <Stack className="items-center relative text-center">
        <Heading as="h2" size="lg">
          DIVA Protocol powered Applications
        </Heading>
        <Paragraph className="text-center">
          Applications that you can be built on top of DIVA Protocol. No smart
          contract programming skills required.
        </Paragraph>
      </Stack>
    </PageLayout>
  );
}
