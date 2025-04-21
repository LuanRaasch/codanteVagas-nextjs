import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import astronautImg from "@/public/404 Error-amico.png";

export default function NotFound() {
    return (
        <main className="text-center py-10 max-w-5xl mx-auto">
            <h1 className="text-4xl font-display font-bold text-gray-700">
                Nada encontrado aqui...
            </h1>
            <Image
                className="mx-auto w-xs mt-10"
                src={astronautImg}
                alt="Imagem de um barco afundando"
            />
            <p className="text-3xl font-light text-gray-500">
                Não foi possível encontrar a página solicitada.
            </p>
            <Link href="/" className={cn(
                buttonVariants({ variant: "default" }),
                "mt-6"
            )}
            >
                Voltar à Home
            </Link>
        </main>
    );
};