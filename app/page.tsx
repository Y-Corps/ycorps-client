import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const font = Poppins({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-poppins",
});

export default function Home() {
    const words = [
        {
            text: "From",
        },
        {
            text: "the",
        },
        {
            text: "depths",
        },
        {
            text: "of",
        },
        {
            text: "creativity",
        },
        {
            text: "to",
        },
        {
            text: "the",
        },
        {
            text: "forefront",
        },
        {
            text: "of",
        },
        {
            text: "technology,",
        },
        {
            text: "Y.Corps",
        },
        {
            text: "brings",
        },
        {
            text: "your",
        },
        {
            text: "ideas",
        },
        {
            text: "to",
        },
        {
            text: "life",
        },
        {
            text: "in",
        },
        {
            text: "the",
        },
        {
            text: "Internet",
        },
        {
            text: "of",
        },
        {
            text: "Things",
        },
        {
            text: "realm!",
        },
    ];

    return (
        <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8576FF] to-[#1C1678]">
            <div className="space-y-4 text-center">
                <h1
                    className={cn(
                        "text-6xl font-bold text-white",
                        font.className
                    )}
                >
                    Y.Corps
                </h1>
                {/* <p className="text-lg font-bold text-white">
                    From the depths of creativity to the forefront of
                    technology, <br />
                    Y.Corps brings your ideas to life in the Internet of Things
                    realm!
                </p> */}


      <TypewriterEffect className="" words={words} />
      
                <div className="">
                    <LoginButton mode="modal" asChild>
                        <Button variant="secondary" size="lg">
                            Sign in
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
