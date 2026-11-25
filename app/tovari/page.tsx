import React from 'react'

const Tovari = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            <div className="w-[1200px] mx-auto bg-white px-6 py-10 flex gap-6">
                <div className="w-[500px] flex flex-col gap-4">
                    <img src="/img3.png" alt="" className="w-full" />
                    <div className="grid grid-cols-3 gap-4">
                        <img src="/img4.png" alt="" className="w-full" />
                        <img src="/image1.png" alt="" className="w-full" />
                        <img src="/img3.png" alt="" className="w-full" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <h1 className="text-3xl font-bold">Яичница-глазунья из трех яиц</h1>
                    <div className="flex items-end gap-2">
                        <p className="text-3xl font-bold">250 ₽</p>
                        <p className="text-sm text-gray-500">/ 400 грамм</p>
                    </div>
                    <p className="text-sm">Количество порций:</p>
                    <div className="flex gap-4 items-center">
                        <p className="px-6 py-3 bg-[#b08a5a] text-white text-base">В корзину</p>
                    </div>
                    <div className="border-t border-gray-300"></div>
                    <h2 className="text-2xl font-bold">Сделайте еще вкуснее</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="border border-gray-200 p-4 flex flex-col gap-2">
                            <img src="/image1.png" alt="" className="w-full" />
                            <p className="text-sm font-bold">Бекон</p>
                            <p className="text-sm text-[#b08a5a]">90 ₽</p>
                        </div>
                        <div className="border border-gray-200 p-4 flex flex-col gap-2">
                            <img src="/img2.png" alt="" className="w-full" />
                            <p className="text-sm font-bold">Авокадо</p>
                            <p className="text-sm text-[#b08a5a]">120 ₽</p>
                        </div>
                        <div className="border border-gray-200 p-4 flex flex-col gap-2">
                            <img src="/img1.png" alt="" className="w-full" />
                            <p className="text-sm font-bold">Сыр</p>
                            <p className="text-sm text-[#b08a5a]">60 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tovari