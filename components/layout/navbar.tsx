import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mx-auto max-w-5xl py-6">
            <Logo bg="light" />
            <ul className="flex items-center gap-6">
                <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
                    Home
                </Link>
                <Link className={cn(buttonVariants({ variant: "link" }))} href="/sobre">
                    Sobre
                </Link>
                <Link className={cn(buttonVariants({ variant: "link" }))} href="/vagas">
                    Vagas
                </Link>
                <Link className={cn(buttonVariants({ variant: "link" }))} href="/vagas/cadastro">
                    Cadastrar Vagas
                </Link>
            </ul>
        </nav>
    );
};