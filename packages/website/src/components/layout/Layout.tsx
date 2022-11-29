import React from "react"
import Head from "next/head"

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	return (
    <>
      <Head>
        <title>DIVA Protocol</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="DIVA Protocol is a decentralized and permissionless piece of infrastructure that allows its users to create and settle fully customizable financial derivative contracts peer-to-peer."
        />
        <meta property="og:title" content="DIVA Protocol" />
        <meta
          property="og:description"
          content="DIVA Protocol is a decentralized and permissionless piece of infrastructure that allows its users to create and settle fully customizable financial derivative contracts peer-to-peer."
        />
        <meta property="og:image" content="/images/featuresbg.png" />
      </Head>
      <div className="flex-col justify-between min-h-full font-body text-base">
        {children}
      </div>
    </>
  );
}

export default Layout
