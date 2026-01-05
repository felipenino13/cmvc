import Link from "next/link";
import { PROGRAMS } from "@/data/programs";

export default function ProgramsPage(){
    return(
        <>
        <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Programs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROGRAMS.map((p) => (
            <div key={p.slug} className="border rounded-lg p-6">
                <p className="text-xs text-gray-600 uppercase tracking-[2]">{p.campus}</p>
                <h2 className="text-xl font-semibold">{p.title}</h2>

                <Link
                href={`/programs/${p.slug}`}
                className="text-blue-600 underline mt-2 inline-block"
                >
                Ver programa
                </Link>
            </div>
            ))}
        </div>
        </main>
        </>
    );
}