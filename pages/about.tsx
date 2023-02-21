import Banner from '@/components/sections/banner';
import CustomBackground from '@/components/elements/customBackground';


export default function About() {

  return (
    <>
      <Banner/>
      <section className="max-w-lg min-h-fit m-auto overflow-clip">
        <CustomBackground backgroundColor="white" color="#d9d9d9" factor={1.5}>
        </CustomBackground>
      </section>
    </>
  )
}
