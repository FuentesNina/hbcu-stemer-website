import MyHead from '../components/sections/MyHead';

export default function RaceInformation() {
  const pageDescription = 'Educate, empower, and elevate HBCU students through scholarships and career resources.';

  return (
    <>
      <MyHead pageTitle='Education Run' pageDescription={pageDescription} />
    </>
  )
}
