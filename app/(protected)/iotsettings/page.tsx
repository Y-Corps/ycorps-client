"use client";
import dotenv from "dotenv";
dotenv.config();
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Popovers } from "./_components/popovers";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
const IO = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
const Page = () => {
    const [isAutomated, setIsAutomated] = useState<boolean>(false);
    const [isFanON2, setIsFanON] = useState<boolean>(true);
    const [isVentON, setIsVentON] = useState<boolean>(false);
    const [isLightON, setIsLightON] = useState<boolean>(false);

    useEffect(() => {
        if (IO) {
            IO.on("isAutomated", (data: string) => {
                if (data === "on") {
                    setIsAutomated(true);
                    console.log(data);
                }
                if (data === "off") {
                    setIsAutomated(false);
                    console.log(data);
                }
                console.log(data);
            });

            IO.on("isFanOn", (data: string) => {
                if (data === "on") {
                    setIsFanON(true);
                    console.log(data);
                }
                if (data === "off") {
                    setIsFanON(false);
                    console.log(data);
                }
                console.log(data);
            });

            IO.on("isLightOn", (data: string) => {
                if (data === "on") {
                    setIsLightON(true);
                    console.log(data);
                }
                if (data === "off") {
                    setIsLightON(false);
                    console.log(data);
                }
                console.log(data);
            });

            IO.on("isVentOn", (data: string) => {
                if (data === "on") {
                    setIsVentON(true);
                    console.log(data);
                }
                if (data === "off") {
                    setIsVentON(false);
                    console.log(data);
                }
                console.log(data);
            });
        }
    }, []);
    // function emitCurrentTime() {
    //     const currentTime = new Date().toLocaleTimeString();
    //     console.log("Current Time:", currentTime); // Log current time on the server console
    //     IO.emit("time", {"time":currentTime}); // Emit current time to all connected clients
    // }
    // setInterval(emitCurrentTime, 1000);
    const onsave = () => {};

    return (
        <div>
            <Card className="bg-secondary flex justify-between flex-col items-center p-4 rounded-xl w-[98vw] mx-4  md:w-[70vw]  shadow-sm">
                <CardHeader>
                    <p className="text-3xl flex flex-row space-x-2 font-semibold text-center">
                        <MdOutlineSettingsInputComponent className="text-black size-9" />{" "}
                        <span> IOT Settings</span>
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
                                        const message = { "isAutomated": isChecked };

                                        IO.emit("isAutomated", message);
                                        setIsAutomated(isChecked);
                                    }}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-200">
                            <div className="space-y-0.5">
                                <div className="text-lg font-semibold">Fan</div>
                                <div className="text-sm">Turn the fan ON!</div>
                            </div>

                            {isAutomated ? (
                                <Popovers
                                    poplabel="Temp"
                                    label="Temprature Value"
                                    desc="Set threshold Value for DHT11 sensor in (°C)"
                                    setInitialValue="30"
                                    setFinalValue="36"
                                    // onSave={onsave}
                                    threshold="DTHThreshold"
                                />
                            ) : (
                                <Switch
                                    checked={isFanON2}
                                    onCheckedChange={(isChecked) => {
                                        const message = { "isFanOn": isChecked };

                                        IO.emit("isFanOn", message);
                                        setIsFanON(isChecked);
                                    }}
                                />
                            )}
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
                            {isAutomated ? (
                                <Popovers
                                    poplabel="Gas"
                                    label="Gas Concentration"
                                    desc="Set threshold Value for MQ135 sensor in (ppm)"
                                    setInitialValue="200"
                                    setFinalValue="250"
                                    // onSave={onsave}
                                    threshold="MQ135Threshold"
                                />
                            ) : (
                                <Switch
                                    checked={isVentON}
                                    onCheckedChange={(isChecked) => {
                                        const message = { "isVentOn": isChecked };
                                        IO.emit("isVentOn", message);
                                        setIsVentON(isChecked);
                                    }}
                                />
                            )}
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
                            {isAutomated ? (
                                <Popovers
                                    poplabel="Light"
                                    label="Gas Concentration"
                                    desc="Set threshold Value for LDR sensor in (lux)"
                                    setInitialValue="150"
                                    setFinalValue="200"
                                    // onSave={onsave}
                                    threshold="LDRThreshold"
                                />
                            ) : (
                                <Switch
                                    checked={isLightON}
                                    onCheckedChange={(isChecked) => {
                                        const message = { "isLightOn": isChecked };
                                        IO.emit("isLightOn", message);
                                        setIsLightON(isChecked);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
