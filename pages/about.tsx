import MyHead from '../components/sections/MyHead';

export default function About() {
  const pageDescription = 'Educate, empower, and elevate HBCU students through scholarships and career resources.';

  return (
    <>
      <MyHead pageTitle='Who We Are' pageDescription={pageDescription} />
    </>
  )
}
