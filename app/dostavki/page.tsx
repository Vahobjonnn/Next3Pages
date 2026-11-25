import Link from 'next/link'
import React from 'react'

const Delivery = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            <div className="w-[1200px] mx-auto bg-white px-6 py-10">
                <div className="flex gap-6 text-sm mb-6">
                    <Link href="#" className="pb-2 border-b border-[#b08a5a]">Завтраки</Link>
                    <Link href="#">Raw</Link>
                    <Link href="#">Холодные закуски</Link>
                    <Link href="#">Брускетты</Link>
                    <Link href="#">К вину</Link>
                    <Link href="/tovari">Салаты</Link>
                    <Link href="#">Супы</Link>
                    <Link href="#">Паста и ризотто</Link>
                    <Link href="#">Мясо</Link>
                    <Link href="#">Рыба</Link>
                    <Link href="#">Grill</Link>
                    <Link href="#">Мангал</Link>
                    <Link href="#">Гарниры</Link>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img1.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Яичница-глазунья из трех яиц</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">250 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img3.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Омлет из трёх яиц</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">250 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img2.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Домашние сырники</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">490 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img4.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Блины</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">от 190 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img2.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Каша с ягодами и кедровыми орехами</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">450 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img1.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Скрэмбл</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">290 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img4.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Яйцо Бенедикт с лососем</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">850 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img3.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Яйцо Бенедикт с беконом</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">650 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img4.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Гречневая каша с авокадо, яйцом пашот и пармезаном</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">490 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img1.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Кобб – салат с лососем</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">890 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 p-6 flex flex-col gap-4">
                        <img src="/img3.png" alt="" className="w-full" />
                        <p className="text-base font-bold text-center">Кобб – салат с креветками</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold">960 ₽</p>
                            <p className="px-4 py-2 bg-[#b08a5a] text-white text-sm">В корзину</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery