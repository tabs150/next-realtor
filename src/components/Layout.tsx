import Head from 'next/head';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Realtor Real Estate Company' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
