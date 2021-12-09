import Head from 'next/head';
import {
  Layout,
  Aside,
  Main,
  Sidebar,
  Banner,
  Footer,
} from '@marceloglacial/rds-beta';

const siteInfo = {
  siteTitle: 'Ravens Design System',
  siteDescription:
    'RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language. ',
  siteKeywords: 'rds, design system',
  siteImage: {
    formats: {
      small: {
        url: 'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
      },
    },
  },
  siteFavicon: {
    url: 'https://carleton.ca/favicon.ico',
  },
};

const PageLayout = (props) => {
  const { children } = props;
  const { siteTitle, siteDescription, siteKeywords, siteImage, siteFavicon } =
    siteInfo;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteImage?.formats.small.url} />
        <link rel='apple-touch-icon' href={siteImage?.formats.small.url} />
        <link rel='icon' type='image/png' href={siteFavicon.url}></link>
      </Head>
      <header>
        <Banner title='Welcome to RDS' />
      </header>
      <Layout type='ama'>
        <Aside>
          <h2>Left Aside</h2>
          <p>
            The left-side aside is intended for site navigation using the Menu
            block. The column has a fixed width of 200px, and disappears from
            view below 810px. While the main purposes of this aside is to
            contain a site navigation, additional aside blocks can be added
            below the menu.
          </p>
        </Aside>
        <Main>{children}</Main>
        <Sidebar>
          <h2>Right aside</h2>
          <p>
            The right-side aside is intended for providing content related to
            what is dispplayed in the main area. The column has a fixed width of
            270px, and drops below the main content area below 810px.
          </p>
        </Sidebar>
      </Layout>
      <footer>
        <Footer type='brand' />
      </footer>
    </>
  );
};
export default PageLayout;
