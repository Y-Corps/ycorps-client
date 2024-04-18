import React from "react";

interface DHT11Props {
    temprature: string;
    humidity: string;
    timeStamp: string;
}

const DHT11 = ({ temprature, humidity, timeStamp }: DHT11Props) => {
    return (
        <div className="block w-[150rem] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex w-[100%] justify-center text-center">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    DHT11
                </h5>
            </div>
            <div className="flex flex-row justify-between items-center">
                <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-white">
                    Temprature
                </h6>
                <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {temprature}°C
                </h1>
            </div>
            <div className="flex flex-row justify-between gap-10">
                <div>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Humidity
                    </h6>
                    <p className="text-sm font-semibold">{timeStamp}</p>
                </div>
                <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {humidity}%
                </h1>
            </div>
        </div>
    );
};

export default DHT11;