"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";

import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SettingsSchema } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoSettingsOutline } from "react-icons/io5";
import { UserRole } from "@prisma/client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { settings } from "@/action/settings";
import { FormError } from "@/components/formerror";
import { FormSuccess } from "@/components/formsuccess";

const SettingsPage = () => {
    const user = useCurrentUser();

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            password: undefined,
            newpassword: undefined,
            name: user?.name || undefined,
            email: user?.email || undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        },
    });

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
            settings(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    }

                    if (data.success) {
                        update();
                        setSuccess(data.success);
                    }
                })
                .catch(() => setError("Something went wrong!"));
        });
    };

    return (
        <Card className="bg-secondary flex justify-between flex-col items-center p-4 rounded-xl w-[98vw] mx-4  md:w-[70vw]  shadow-sm">
            <CardHeader>
                <p className="text-3xl flex flex-row space-x-2 font-semibold text-center">
                    <IoSettingsOutline className="text-black size-9" />{" "}
                    <span> Settings</span>
                </p>
            </CardHeader>
            <CardContent className="w-[100%]">
                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="John Doe"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {user?.isOAuth === false && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="john.doe@example.com"
                                                        type="email"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg">
                                                    Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="******"
                                                        type="password"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="newpassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg">
                                                    New Password
                                                </FormLabel>
                                                <FormControl className="">
                                                    <Input
                                                        className="text-lg"
                                                        {...field}
                                                        placeholder="******"
                                                        type="password"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg">
                                            Role
                                        </FormLabel>
                                        <Select
                                            disabled={isPending}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem
                                                    value={UserRole.ADMIN}
                                                >
                                                    Admin
                                                </SelectItem>
                                                <SelectItem
                                                    value={UserRole.USER}
                                                >
                                                    User
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {user?.isOAuth === false && (
                                <FormField
                                    control={form.control}
                                    name="isTwoFactorEnabled"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-lg">
                                                    Two Factor Authentication
                                                </FormLabel>
                                                <FormDescription className="text-sm">
                                                    Enable two factor
                                                    authentication for your
                                                    account
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    disabled={isPending}
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button disabled={isPending} type="submit">
                            Save
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default SettingsPage;
