import Image from "next/image";
import Link from "next/link";

//data
import { INFO_GENERAL } from "@/data/general";

export default function Home() {
  return (
    <>
      <div>
        <div className="max-w-5xl mx-auto grid gap-5">
          <Image 
            src={INFO_GENERAL.logoBlack}
            alt="Logo CMVC"
            width={120}
            height={50}
          />
          <Link
            className="text-[#0645AD] underline"
            href="/programs"
          >
            CMVC Programs
          </Link> 
        </div>
      </div>
      
    </>
  );
}
