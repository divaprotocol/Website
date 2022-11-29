import Image from "next/image";
import { Stack } from "../components/layout/Stack";
import PageLayout from "../components/pageLayout/PageLayout";
import { Heading } from "../components/typography/Heading";
import { Highlight } from "../components/typography/Highlight";
import { Paragraph } from "../components/typography/Paragraph";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

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
          <Paragraph className="text-center text-lg">
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
        <Paragraph className="text-center text-lg">
          Applications that you can be built on top of DIVA Protocol. No smart
          contract programming skills required.
        </Paragraph>
      </Stack>

      <Stack vertical className="pt-20">
        <Card>
          <Stack>
            <Heading as="h3">Insurance</Heading>
            <Paragraph>
              Derivatives with payouts linked to insurance loss events such as
              natural disasters, credit default, DeFi hacks, or medical claim
              costs.
            </Paragraph>
          </Stack>
        </Card>
        <Card>
          <Stack>
            <Heading as="h3">Structured products</Heading>
            <Paragraph>
              Derivatives mirroring the payoff curve of barrier reverse
              convertibles and other popular structured products.
            </Paragraph>
          </Stack>
        </Card>
        <Card>
          <Stack>
            <Heading as="h3">Prediction markets</Heading>
            <Paragraph>
              Derivatives with binary or linear payoffs that are linked to the
              outcome of sport, political or economic events.
            </Paragraph>
          </Stack>
        </Card>
      </Stack>
      <div className="py-11 pb-24 flex justify-center">
        <Button>Learn more</Button>
      </div>

      <
    </PageLayout>
  );
}
