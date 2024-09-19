export default function MedpartnerLP() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black to-transparent">
        <h1 className="text-3xl font-bold text-white font-serif">Medpartner</h1>
        <nav>
          <ul className="flex space-x-6">
            {['about', 'services', 'doctors', 'team'].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} className="text-white hover:text-yellow-300 transition-colors uppercase tracking-wide text-sm font-semibold">
                  {item === 'about' ? 'About Us' : item === 'services' ? '事業内容' : item === 'doctors' ? '在籍医師' : '経営メンバー'}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="/luxury-interior.jpg"
            layout="fill"
            objectFit="cover"
            alt="Luxury interior"
            className="absolute inset-0 z-0"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="relative z-20 text-white max-w-4xl mx-auto px-4 space-y-8 text-center">
            <h2 className="text-6xl font-bold mb-2 font-serif">Medpartner</h2>
            <h3 className="text-3xl font-light mb-6 italic">予防から始める新しい健康習慣</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              日本全国どこにいても、高水準の医療サポートを。
              医師の強力なネットワークを活用し、各診療科の専門医と連携した
              パーソナルドクターサービスを提供いたします。
            </p>
            <div className="space-x-6">
              <Button size="lg" className="bg-yellow-600 text-white hover:bg-yellow-700 transition-colors px-8 py-3 rounded-full text-lg font-semibold">
                無料相談
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors px-8 py-3 rounded-full text-lg font-semibold">
                資料請求
              </Button>
            </div>
          </div>
        </section>

        // ... 他のセクション ...

      </main>

      // ... フッター ...
    </div>
  )
}