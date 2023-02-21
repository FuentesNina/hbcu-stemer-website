import CustomBackground from "@/components/elements/customBackground";

export default function Home() {

  return (
    <>
      <section className="max-w-lg min-h-fit m-auto overflow-clip">
        <CustomBackground backgroundColor="white" color="#d9d9d9" factor={2}>
          <p className="bg-myRed/[0.5]">I'm seeing where this lands</p>
        </CustomBackground>
      </section>
    </>
  )
}
