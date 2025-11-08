import Card from "@/components/Card";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Recursos y Herramientas WEB</title>
      <meta name="description" content="Descubre recursos y herramientas web útiles para facilitar tus tareas, generar código, acortar URLs y mucho más." />
      <meta property="og:title" content="Recursos y Herramientas Web" />
      <meta property="og:description" content="Accede a recursos y herramientas web prácticas para simplificar tu trabajo y proyectos online." />
      <meta property="og:type" content="website" />
    </Head>
    <h1 className="text-5xl font-bold mb-6">Utilitarios WEB</h1>
    <section >
      <h2 className="text-3xl text-gray-700 font-bold mb-6">Nuestros Productos</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card href="/rotate-matrix" imageUrl="/images/rotation.png" title="Rotar matriz" description="Rota una matriz de números" />
      </div>
    </section>
    </>
  );
}
