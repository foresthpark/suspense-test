import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const DynamicComponent = dynamic(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/TestComponent")), 6000)
    ),
  { ssr: false, suspense: true }
);

const LoadingComponent = () => {
  return (
    <div>
      <Image
        src="https://i.imgur.com/tphw1VF.gif"
        alt=""
        width={600}
        height={400}
      />
      <div className="text-xl text-center text-italic">Loading...</div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <Suspense fallback={<LoadingComponent />}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
