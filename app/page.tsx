import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full ">
       <Hero />
      </div>
    </main>
  );
};
export default HomePage;
