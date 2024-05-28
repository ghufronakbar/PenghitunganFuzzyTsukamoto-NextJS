import { Inter } from "next/font/google";
import History from "./history";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <History/>
    </>
  );
}
