import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import peopleImage from "@/public/people.png";

export default function Home() {
  return (
    <section className="text-center pb-10">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">
        Diga adeus ás longas buscas por uma vaga
      </h1>
      <Link
        href="/vagas"
        className={cn(
          "mt-12 cursor-pointer",
          buttonVariants({ variant: "outline" }),
        )}
      >
        Busque uma vaga
      </Link>
      <Image
        src={peopleImage}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12" />
    </section>
  );
};