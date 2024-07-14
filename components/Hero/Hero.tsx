import Image from "next/image";

function Hero() {
  return (
    <div
      className="page-center flex flex-col items-center md:pt-40 md:pb-24 p-80 m-2"
      id="Hero"
    >
      <h1 className="mb-4 text-4xl font-bold pt-8 md:text-4xl lg:text-5xl text-secondary justify-center m-2">
        How to find your role:
      </h1>
      <p className="font-light md:text-xl text-lg text-lightgrey m-2">
        A fun guides for dummies [like me]
      </p>
      <p className="font-light md:text-xl text-lg text-lightgrey m-2 xl:mx-64 text-center">
        Welcome to zero. where you can learn everything you need to know to get
        the role. This website provides comprehensive information based on what
        I have researched and learned throughout my life journey.
      </p>
      <p className="pt-24 text-xl">Good luck !</p>
    </div>
  );
}

export { Hero };
