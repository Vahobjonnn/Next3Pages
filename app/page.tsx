export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="py-72 bg-[url('/first-screen.png')] bg-cover bg-center bg-gray-400 bg-blend-multiply"></div>
      <div className="w-[1200px] mx-auto bg-white px-6">
        <div className="py-10">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm">О РЕСТОРАНЕ</p>
            <div className="w-10 border-t border-[#b08a5a]"></div>
          </div>
          <div className="flex gap-6">
            <h2 className="w-80 text-4xl font-bold">Food Exxe Relo</h2>
            <div className="flex-1 text-base text-gray-600 flex flex-col gap-4">
              <p>Food Exxe Relo — это видовой ресторан на Крестовском острове с панорамными окнами и открытой террасой. Здесь любят собираться семьями, друзьями и коллегами.</p>
              <p>Наша кухня сочетает классические рецепты и современные идеи. Каждое блюдо мы готовим из свежих сезонных продуктов, а меню обновляем несколько раз в год.</p>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm">МЕНЮ</p>
            <div className="w-10 border-t border-[#b08a5a]"></div>
          </div>
          <div className="flex gap-6 mb-6">
            <h2 className="w-80 text-4xl font-bold">Меню</h2>
            <div className="flex-1 text-base text-gray-600 flex flex-col gap-4">
              <p>В основном меню представлены закуски, горячие блюда, десерты и блюда на углях. Для любителей вина у нас есть отдельная карта.</p>
              <p>Барная карта включает авторские коктейли, домашние лимонады и крафтовое пиво.</p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <div className="w-72 text-center">
              <img src="/image1.png" alt="" className="w-full" />
              <p className="text-sm mt-3">ОСНОВНОЕ МЕНЮ</p>
            </div>
            <div className="w-72 text-center">
              <img src="/image2.png" alt="" className="w-full" />
              <p className="text-sm mt-3">БАРНАЯ КАРТА</p>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm">ДОСТАВКА</p>
            <div className="w-10 border-t border-[#b08a5a]"></div>
          </div>
          <div className="flex gap-6">
            <h2 className="w-80 text-4xl font-bold">Служба доставки</h2>
            <div className="flex-1 text-base text-gray-600 flex flex-col gap-4">
              <p>Мы привезём ваш заказ домой или в офис. Доставка работает ежедневно с 11:00 до 22:00 по Петроградскому и Василеостровскому районам. Блюда упаковываются так, чтобы приехать горячими.</p>
              <div className="flex gap-4">
                <p className="px-6 py-3 bg-[#b08a5a] text-white text-sm">Подробнее</p>
                <p className="px-6 py-3 border border-[#b08a5a] text-sm">Условия доставки</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>

    </div>
  )
}