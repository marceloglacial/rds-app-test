import { Masthead } from '@marceloglacial/rds-beta';
import PageLayout from '../components/PageLayout/PageLayout';

export default function Home() {
  return (
    <>
      <Masthead title='Ravens Design System' />
      <PageLayout>
        <h2>Multicol AMA (Aside + Main + Aside)</h2>
        <p>
          This is another two column layout, but this time it consists of a main
          content area, immediately followed by the aside. The base class name
          l-multicol-ma reflects the order that the elements appears in its used
          of ma.
        </p>
      </PageLayout>
    </>
  );
}
