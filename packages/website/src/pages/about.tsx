import Image from "next/image";
import { Stack } from "../components/layout/Stack";
import PageLayout from "../components/pageLayout/PageLayout";
import { Heading } from "../components/typography/Heading";
import { Highlight } from "../components/typography/Highlight";
import { Paragraph } from "../components/typography/Paragraph";
import { Avatar } from "../components/Avatar";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function About() {
  return (
    <PageLayout>
      <Stack className="space-y-36 py-40">
        <Stack vertical className="justify-center space-x-24">
          <Image
            className="mt-10"
            src="/illustrations/Mission.svg"
            width={459}
            height={453}
            alt="Mission"
          />
          <Stack className="text-left max-w-lg">
            <h1 className="rounded font-sans px-4 py-2 bg-white bg-opacity-10 w-min whitespace-nowrap text-white text-sm">
              Our Vision
            </h1>
            <Heading as="h2" size="sm">
              <Highlight>Establish DIVA Protocol</Highlight> as the operation
              system for derivative applications in the decentralized financial
              world
            </Heading>
            <Paragraph>
              We envision a world where financial institutions are built on top
              of open-source decentralized protocols and allow everyone with an
              internet connection to access basic financial services in a
              permissionless way.DIVA Protocol is our contribution to this new
              financial paradigm to enable derivative applications including
              insurance, predictions and structured products peer-to-peer.
            </Paragraph>
          </Stack>
        </Stack>

        <Stack vertical className="justify-center space-x-20">
          <Stack className="text-left max-w-lg">
            <h2 className="rounded font-sans px-4 py-2 bg-white bg-opacity-10 w-min whitespace-nowrap text-white text-sm">
              DAO Mission
            </h2>
            <Heading as="h3" size="sm">
              <Highlight>Foster adoption of DIVA Protocol</Highlight> by
              steering treasury resources
            </Heading>
            <Paragraph>
              The DIVA DAO’s primary mission is to grow the ecosystem around
              DIVA Protocol by steering treasury funds towards projects and
              initiatives that have the most impact on the future of DIVA
              Protocol. This includes providing grants to teams that build
              tooling,infrastructure and applications around DIVA Protocol.
            </Paragraph>
          </Stack>
          <Image
            className="mt-10"
            src="/illustrations/Community.svg"
            width={459}
            height={453}
            alt="Mission"
          />
        </Stack>
        <Stack className="items-center">
          <Heading as="h2">Genesis Team</Heading>
          <Paragraph className="text-center">
            The team that planted the seeds.
          </Paragraph>
          <div className="grid grid-cols-4 gap-10">
            <Avatar src="/team/alex.png" name="Alex" />
            <Avatar src="/team/sambit.png" name="Sambit" />
            <Avatar src="/team/richard.png" name="Richard" />
            <Avatar src="/team/harsh.png" name="Harsh" />
            <Avatar src="/team/evan.png" name="Evan" />
            <Avatar src="/team/ayaz.png" name="Ayaz" />
            <Avatar src="/team/precious.png" name="Precious" />
            <Avatar src="/team/ashis.png" name="Ashis" />
            <Avatar src="/team/manvir.png" name="Manvir" />
            <Avatar src="/team/tarun.png" name="Tarun" />
            <Avatar src="/team/sahil.png" name="Sahil" />
            <Avatar src="/team/wlad.png" name="Wladimir" />
            <Avatar src="/team/sascha.png" name="Sascha" />
            <Avatar src="/team/julian.png" name="Julian" />
            <Avatar src="/team/kerry.png" name="Kerry" />
          </div>
        </Stack>

        <Card className="max-w-3xl self-center py-12 px-16">
          <Stack className="justify-center items-center space-y-12">
            <Heading as="h2" size="lg">
              <Highlight>Build</Highlight>
            </Heading>
            <Paragraph>
              DIVA Protocol is a smart contract that takes care of all the logic
              used to create and settle derivative assets. As a Web2 developer,
              you do not need to have any knowledge of writing smart contracts
              in Solidity. You can fully focus on building the best user
              experiences for creating and settling insurance, prediction or
              structured products.
            </Paragraph>
            <Stack vertical className="space-x-14">
              <Button primary>Documentation</Button>
              <Button>Explore Apps</Button>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </PageLayout>
  );
}

