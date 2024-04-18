import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface PopoversProps {
    poplabel: string;
    label?: string;
    desc: string;
    setInitialValue: string;
    setFinalValue: string;
    onSave: () => void;
}

export function Popovers({
    poplabel,
    label,
    desc,

    setInitialValue,
    setFinalValue,
    onSave,
}: PopoversProps) {
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
                            <Label htmlFor="width">Min Range</Label>
                            <Input
                                id="width"
                                defaultValue={setInitialValue}
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Max Range</Label>
                            <Input
                                id="maxWidth"
                                defaultValue={setFinalValue}
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                    <CardFooter>
                        <Button>Save Changes</Button>
                    </CardFooter>
                </form>
            </PopoverContent>
        </Popover>
    );
}
