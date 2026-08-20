export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-950 transition-colors duration-300">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Jack Doughty BSc
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Full-Stack Software Engineer based in Oxfordshire
        </p>

        <div className="pt-4">
          <a
            href="mailto:contact@jackdoughty.com"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            contact@jackdoughty.com
          </a>
        </div>
      </div>
    </main>
  );
}
