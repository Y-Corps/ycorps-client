import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { io } from "socket.io-client";

const IO = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");

interface PopoversProps {
    poplabel: string;
    label?: string;
    desc: string;
    setInitialValue: number;
    setFinalValue: number;
    threshold?: string;
}

export function Popovers({
    poplabel,
    label,
    desc,
    threshold,
    setInitialValue,
    setFinalValue,
}: PopoversProps) {
    const onSave = (event: React.FormEvent) => {
        event.preventDefault();
        const max = document.getElementById(
            "maxValue"
        ) as HTMLInputElement | null;
        const min = document.getElementById(
            "minValue"
        ) as HTMLInputElement | null;
        const maxValue = max?.value;
        const minValue = min?.value;

        IO.emit(threshold || "", { min: minValue, max: maxValue });
    };
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="w-[70px]" variant="outline">
                    {poplabel}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <form onSubmit={onSave} className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">{label}</h4>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="minValue">Min Range</Label>
                            <Input
                                id="minValue"
                                type="number"
                                defaultValue={setInitialValue}
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxValue">Max Range</Label>
                            <Input
                                id="maxValue"
                                defaultValue={setFinalValue}
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                    <CardFooter>
                        <Button onClick={onSave}>Save Changes</Button>
                    </CardFooter>
                </form>
            </PopoverContent>
        </Popover>
    );
}
