"use client";
import React, { useEffect, useState } from "react";
import DHT11 from "./_components/data/DH11Card";
import LDRCard from "./_components/data/LDRCard";
import MQ135 from "./_components/data/MQ135";
import RelayCard from "./_components/data/RelayCard";
import { io } from "socket.io-client";
const socket = io("http://localhost:3501");
const page = () => {
    const [isLightOn, setIsLighton] = useState<any>(false);
    const [isFanOn, setIsFanOn] = useState<any>(false);
    const [isVentOn, setIsVentOn] = useState<any>(false);
    useEffect(() => {
        socket.on("isFanOn", (data) => {
            if (data === "on") {
                setIsFanOn(true);
                console.log(data);
            }
            if (data === "off") {
                setIsFanOn(false);
                console.log(data);

            }
            console.log(data)
        });
        socket.on("isLightOn", (data) => {
            if (data === "on") {
                setIsLighton(true);
                console.log(data);
            }
            if (data === "off") {
                setIsLighton(false);
                console.log(data);

            }
            console.log(data)

        });
        socket.on("isVentOn", (data) => {
            if (data === "on") {
                setIsVentOn(true);
                console.log(data);
            }
            if (data === "off") {
                setIsVentOn(false);
                console.log(data);

            }
            console.log(data)

        });
        socket.on("isVentOn", (data) => {
            if (data === "on") {
                setIsVentOn(true);
                console.log(data);
            }
            if (data === "off") {
                setIsVentOn(false);
                console.log(data);

            }
            console.log(data)

        });
    }, [socket]);


    
    return (
        <>
            <div className="bg-secondary w-[100%] flex flex-col items-center justify-center p-9 rounded-xl mx-4  md:w-[70vw] gap-9 shadow-sm">
                <div className="flex w-[100%] flex-wrap gap-y-3 justify-between flex-row">
                    <DHT11 />
                    <MQ135 />
                    <LDRCard />
                </div>
                <div className="flex w-[100%] flex-wrap gap-y-3 justify-between flex-row">
                    <RelayCard
                        label="Fan"
                        thresholdLabel="Temperature"
                        thresholdFrom="20"
                        thresholdTo="12"
                        isRelayon={isFanOn}
                        unit="°C"
                    />
                    <RelayCard
                        label="Ventilation"
                        thresholdLabel="Gas Concentration"
                        thresholdFrom="20"
                        thresholdTo="12"
                        isRelayon={isVentOn}
                        unit="PPM"
                    />
                    
                    <RelayCard
                        label="Light"
                        thresholdLabel="Light Intensity"
                        thresholdFrom="20"
                        thresholdTo="12"
                        isRelayon={isLightOn}
                        unit="LUX"
                    />
                </div>
            </div>
        </>
    );
};

export default page;
