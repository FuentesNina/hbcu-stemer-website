import MyHead from '../components/sections/MyHead';

export default function Home() {
  const pageDescription = 'Educate, empower, and elevate HBCU students through scholarships and career resources.';

  return (
    <>
      <MyHead pageTitle='Home' pageDescription={pageDescription} />
    </>
  )
}
