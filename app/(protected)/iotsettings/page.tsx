"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3501");

const page = () => {
    const [socket, setsocket] = useState<any>(undefined);
    const [isAutomated, setIsAutomated] = useState<boolean>(false);
    const [isFanON, setIsFanON] = useState<boolean>(false);
    const [isVentON, setIsVentON] = useState<boolean>(false);
    const [isLightON, setIsLightON] = useState<boolean>(false);
    useEffect(() => {
        const socket = io("http://localhost:3501");
            setsocket(socket);
        }, []);
        
        useEffect(() => {
            if (socket) {
                
        
        socket.on("isAutomated", (data: string) => {
            if (data === "on") {
                setIsAutomated(true);
                console.log(data);
            }
            if (data === "off") {
                setIsAutomated(false);
                console.log(data);

            }
            console.log(data)
        });
        socket.on("isFanOn", (data: string) => {
            if (data === "on") {
                setIsFanON(true);
                console.log(data);
            }
            if (data === "off") {
                setIsFanON(false);
                console.log(data);

            }
            console.log(data)
        });
        socket.on("isLightOn", (data: string) => {
            if (data === "on") {
                setIsLightON(true);
                console.log(data);
            }
            if (data === "off") {
                setIsLightON(false);
                console.log(data);

            }
            console.log(data)

        });
        socket.on("isVentOn", (data: string) => {
            if (data === "on") {
                setIsVentON(true);
                console.log(data);
            }
            if (data === "off") {
                setIsVentON(false);
                console.log(data);

            }
            console.log(data)

        });
    }
    }, [socket]);
    return (
        <div>
            <Card className="bg-secondary flex justify-between flex-col items-center p-4 rounded-xl w-[98vw] mx-4  md:w-[70vw]  shadow-sm">
                <CardHeader>
                    <p className="text-3xl font-semibold text-center">
                        ⚙️ IOT Settings
                    </p>
                </CardHeader>
                <CardContent className="w-[100%]">
                    <div className="space-y-4">
                        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-200">
                            <div className="space-y-0.5">
                                <div className="text-lg font-semibold">
                                    Automate the task?
                                </div>
                                <div className="text-sm">
                                    Turn it on if you want to Automate!
                                </div>
                            </div>
                            <Switch
                            checked={isAutomated}
                                onCheckedChange={(isChecked) => {
                                    const message = isChecked ? "on" : "off";
                                    socket.emit("isAutomated", message);
                                    message === "on" && setIsAutomated(true);
                                    message === "off" && setIsAutomated(false);
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-200">
                            <div className="space-y-0.5">
                                <div className="text-lg font-semibold">Fan</div>
                                <div className="text-sm">Turn the fan ON!</div>
                            </div>
                            <Switch
                            checked={isFanON}
                                onCheckedChange={(isChecked) => {
                                    const message = isChecked ? "on" : "off";
                                    socket.emit("isFanOn", message);
                                }}
                                disabled={isAutomated}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-200">
                            <div className="space-y-0.5">
                                <div className="text-lg font-semibold">
                                    Vent
                                </div>
                                <div className="text-sm">
                                    Turn the ventilation on!
                                </div>
                            </div>
                            <Switch
                            checked={isVentON}
                                onCheckedChange={(isChecked) => {
                                    const message = isChecked ? "on" : "off";
                                    socket.emit("isVentOn", message);
                                }}
                                disabled={isAutomated}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-200">
                            <div className="space-y-0.5">
                                <div className="text-lg font-semibold">
                                    Light
                                </div>
                                <div className="text-sm">
                                    Turn the Lights on
                                </div>
                            </div>
                            <Switch
                            checked={isLightON}

                                onCheckedChange={(isChecked) => {
                                    const message = isChecked ? "on" : "off";
                                    socket.emit("isLightOn", message);
                                }}
                                disabled={isAutomated}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default page;
