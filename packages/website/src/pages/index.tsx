import Image from "next/image";
import { useCallback, useEffect } from "react";
import { Stack } from "../components/layout/Stack";
import PageLayout from "../components/pageLayout/PageLayout";
import { Heading } from "../components/typography/Heading";
import { Highlight } from "../components/typography/Highlight";
import { Paragraph } from "../components/typography/Paragraph";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";

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
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  return (
    <PageLayout>
      <Particles
        canvasClassName={
          /*tw*/ `absolute top left-0  bg-gradient-to-t  from-black via-slate-800 to-black w-full`
        }
        init={particlesInit}
        style={{}}
        params={{
          style: { position: "absolute" },
          particles: {
            color: {
              value: "#3970b6",
            },
            links: {
              color: "#3970b6",
              distance: 270,
              enable: true,
              opacity: 0.8,
              width: 0.8,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      <div
        className={`relative h-[calc(100vh-5rem)] flex flex-row justify-center
      items-center bg-gradient-to-t from-[rgba(0,0,0,.7)] via-transparent radial-gradient-1`}
      >
        <Stack className="items-center relative">
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
      <Stack className="items-center relative text-center pt-20">
        <Heading as="h2" size="lg">
          DIVA Protocol powered Applications
        </Heading>
        <Paragraph className="text-center text-lg">
          Applications that you can be built on top of DIVA Protocol. No smart
          contract programming skills required.
        </Paragraph>
      </Stack>

      <Stack vertical className="pt-20 container max-w-7xl m-auto space-x-12">
        <Card>
          <Stack>
            <Image
              alt="Insurance Products"
              className="self-center"
              width="100"
              height="100"
              src="/icons/InsuranceProducts.svg"
            />
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
            <Image
              alt="Structured Products"
              className="self-center"
              width="100"
              height="100"
              src="/icons/StructuredProducts.svg"
            />
            <Heading as="h3">Structured products</Heading>
            <Paragraph>
              Derivatives mirroring the payoff curve of barrier reverse
              convertibles and other popular structured products.
            </Paragraph>
          </Stack>
        </Card>
        <Card>
          <Stack>
            <Image
              alt="Prediction Markets"
              className="self-center"
              width="100"
              height="100"
              src="/icons/Prediction.svg"
            />
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

      <Stack className="container max-w-7xl m-auto pt-32">
        <Heading as="h3" size="lg">
          Protocol <Highlight>Features</Highlight>
        </Heading>
        <div className="relative">
          <div className="absolute w-full h-full flex content-center items-center flex-col">
            <Image
              src="/icons/Protocol.png"
              className="h-full z-0 max-h-full max-w-fit self-center"
              width="1300"
              height="900"
              alt="Diva Sphere"
            />
          </div>

          <Stack vertical className="relative justify-between">
            <Stack className="w-1/3">
              <Card>
                <Heading as="h3">Permissionless</Heading>
                <Paragraph>
                  Anyone can create and settle derivatives on anything without
                  permission.
                </Paragraph>
              </Card>
              <Card>
                <Heading as="h3">Tradeable</Heading>
                <Paragraph>
                  Position tokens are ERC20 and can be easily integrated into
                  any CEX or DEX.
                </Paragraph>
              </Card>
            </Stack>
            <Stack className="w-1/3">
              <Card>
                <Heading as="h3">Fully collateralized</Heading>
                <Paragraph>
                  Eliminates counterparty risk and margin calls and gives users
                  a safe and frictionless experience.
                </Paragraph>
              </Card>
              <Card>
                <Heading as="h3">Highly customizable</Heading>
                <Paragraph>
                  Flexible payoff profiles, any reference asset, oracle
                  agnostic, any ERC20 as collateral.
                </Paragraph>
              </Card>
            </Stack>
          </Stack>
        </div>

        <Stack>
          <Heading as="h3" size="lg">
            How it <Highlight>Works</Highlight>
          </Heading>
          <Card>
            <Stack vertical>
              <Image
                src="/icons/Specify.svg"
                height="300"
                width="300"
                alt="Diva Sphere"
              />
              <div className="text-left space-y-4">
                <div className="space-y-2">
                  <Highlight className="font-sans italic inline-block">
                    Step 1:
                  </Highlight>
                  <Heading as="h3" size="sm">
                    Specify
                  </Heading>
                </div>
                <Paragraph>
                  Specify the offer terms including underlying event, payoff
                  profile and price.
                </Paragraph>
              </div>
            </Stack>
          </Card>

          <Card>
            <Stack vertical>
              <Image
                src="/icons/SignAndShare.png"
                height="300"
                width="300"
                alt="Sign and Share"
              />
              <div className="text-left space-y-4">
                <div className="space-y-2">
                  <Highlight className="font-sans italic inline-block">
                    Step 2:
                  </Highlight>
                  <Heading as="h3" size="sm">
                    Sign & Share
                  </Heading>
                </div>
                <Paragraph>
                  Sign the offer with your private key and share it with
                  counterparties via email, chat or social media.
                </Paragraph>
              </div>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </PageLayout>
  );
}
