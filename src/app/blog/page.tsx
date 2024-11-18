export default function Blog() {
    return (
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg">
          Bem-vindo ao blog da TakeFullness! Aqui você encontra os melhores conteúdos sobre meditação, bem-estar e autodesenvolvimento.
        </p>
        {/* Exemplo de post */}
        <div className="mt-8 space-y-4">
          <article className="p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Postagem Exemplo</h2>
            <p className="text-gray-600">
              Uma introdução interessante para atrair leitores.
            </p>
            <a href="#" className="text-primary hover:underline">
              Ler mais →
            </a>
          </article>
        </div>
      </main>
    );
  }
  