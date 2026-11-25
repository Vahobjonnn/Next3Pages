import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Exxe Relo",
  description: "Видовой ресторан на Крестовском острове",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col">
        <div className="fixed top-0 left-0 w-full bg-white z-50">
          <div className="w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
            <p className="text-3xl font-bold text-[#c9a46a]">FOOD</p>
            <div className="flex gap-6 text-xl items-center text-black">
              <Link href="#">О ресторане</Link>
              <Link href="#">Меню</Link>
              <Link href="/dostavki">Доставка</Link>
              <Link href="#" className="px-6 py-2 bg-[#b08a5a] text-white">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="pt-[68px]">{children}</div>
        <div className="bg-gray-100 text-gray-800">
          <div className="w-[1200px] mx-auto bg-white px-6">
            <div className="pb-10">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-sm">КОНТАКТЫ</p>
                <div className="w-10 border-t border-[#b08a5a]"></div>
              </div>
              <div className="flex gap-6">
                <div className="w-80 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold text-[#b08a5a]">2 мин</p>
                    <p className="text-sm text-gray-500">от метро Крестовский остров</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#b08a5a]">12 мин</p>
                    <p className="text-sm text-gray-500">до Каменного острова</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#b08a5a]">42 мин</p>
                    <p className="text-sm text-gray-500">от центра города</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#b08a5a]">52 мин</p>
                    <p className="text-sm text-gray-500">от аэропорта Пулково</p>
                  </div>
                </div>
                <div className="w-[700px] px-6 py-20 bg-[url('/image3.png')] bg-cover bg-center">
                  <div className="w-[400px] p-6 bg-gray-700 text-white text-sm flex flex-col gap-2">
                    <p>Санкт-Петербург, Крестовский пр., 12</p>
                    <p>+7 (000) 000-00-00</p>
                    <p>Время работы:</p>
                    <p>Пн–Чт: 12:00–23:00</p>
                    <p>Пт–Вс: 12:00–01:00</p>
                    <div className="flex gap-2 pt-2">
                      <p className="px-6 py-2 bg-[#b08a5a]">Забронировать</p>
                      <p className="px-6 py-2 border border-white">Как добраться</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-gray-300 text-sm">
          <div className="w-[1200px] mx-auto px-6 py-6 flex justify-between items-center">
            <p className="text-2xl font-bold text-[#c9a46a]">FOOD</p>
            <p>© 2026 Food Exxe Relo. Все права защищены.</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </body>
    </html>
  );
}