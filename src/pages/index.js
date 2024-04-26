import { AppFooter } from '@/components/AppFooter';
import { AppHeader } from '@/components/AppHeader';
import { CommonApi } from '@/services/api/CommonApi';
import HomeLayout from '@/pageLayout/Home/HomeLayout';
export default function Home({ repo }) {
  return (
    <>
      <AppHeader />
      <HomeLayout home={repo.data} />
      <AppFooter />
    </>
  );
}
export async function getServerSideProps() {
  const amount = 10;
  // Fetch data from external API
  const res = await CommonApi.getMainPage(amount);
  const repo = res.data;
  // Pass data to the page via props
  return { props: { repo } };
}
