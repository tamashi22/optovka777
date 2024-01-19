import { AppFooter } from '@/components/AppFooter';
import { AppHeader } from '@/components/AppHeader';
import HomeLayout from '@/pageLayout/Home/HomeLayout';
export default function Home() {
  return (
    <>
      <AppHeader />
      <HomeLayout />
      <AppFooter />
    </>
  );
}
  