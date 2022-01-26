import React from 'react';
import Image from 'next/image';

import ExchageImg from '../public/exchange.svg'
const PopularCategory: React.FC = () => {
    const items = [
        { name: "Exchage", bgColor: 100 },
        { name: "Games", bgColor: 200 },
        { name: "MarketPlace", bgColor: 300 },
        { name: "Defi", bgColor: 400 },
        { name: "Collectibles", bgColor: 500 },
        { name: "Utilities", bgColor: 600 }
    ];
    return (
        <>
            <div className="flex items-center justify-center flex-wrap w-96">
                {items.map((item, index) => {
                    return (
                        <a
                            key={index}
                            className={`m-4 p-6 text-left bg-newBlue-${item.bgColor} border-solid border-2 border-inherit rounded-md w-40 pl-1.5 hover:border-blue-900`}
                        >
                            <div className={`flex space-x-4 bg-darkBlue-${item.bgColor} w-4`}>
                                <Image src={ExchageImg} alt='no-image' />
                            </div>
                            <span className="text-base font-mono text-gray-500">{item.name}</span>
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default PopularCategory;
