import Image from "next/image";

interface TechCardProps {
    name: string,
    role: string,
    icon: string
}

export default function TechCard({name, role, icon}: TechCardProps) {
    return (
        <div className="group rounded-2xl border border-white bg-card p-6 transition hover:border-primary/50">
            <div className="flex flex-col items-center text-center gap-4">
                <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center">
                    <Image src={icon} alt={name} width={28} height={28} />
                </div>
                <div className="">
                    <p className="text-sm font-medium text-white">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                </div>
            </div>
        </div>
    );
}