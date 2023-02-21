import CustomBackground from "@/components/elements/customBackground";

export default function Home() {

  return (
    <>
      <section className="w-full overflow-clip">
        <CustomBackground backgroundColor="white" factor={1.5}/>
        <p>I'm seeing where this lands</p>
      </section>
    </>
  )
}
