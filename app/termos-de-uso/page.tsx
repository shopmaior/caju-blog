import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Caju Ofertas Blog",
  description:
    "Conheça as regras e condições para uso do Blog do Caju Ofertas.",
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1>Termos de Uso</h1>
        <p className="lead">
          Bem-vindo ao Blog do Caju Ofertas. Ao acessar nosso conteúdo, você
          concorda com os termos descritos abaixo.
        </p>

        <h2>1. Natureza Informativa</h2>
        <p>
          O Blog do Caju Ofertas tem caráter estritamente editorial e
          informativo. Os artigos, notícias e dicas publicados expressam a
          opinião dos autores e equipe editorial. Embora nos esforcemos para
          garantir a precisão das informações, não garantimos que todo o
          conteúdo esteja sempre atualizado ou livre de erros.
        </p>

        <h2>2. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo deste blog (textos, imagens, logotipos e layout) é
          protegido por direitos autorais e propriedade intelectual. É proibida
          a reprodução total ou parcial, cópia ou distribuição de qualquer
          material sem autorização prévia.
        </p>

        <h2>3. Uso do Conteúdo</h2>
        <p>
          Você pode ler, compartilhar links e utilizar o conteúdo para fins
          pessoais e não comerciais, desde que citada a fonte e mantida a
          integridade das informações.
        </p>

        <h2>4. Limitação de Responsabilidade</h2>
        <p>
          O Caju Ofertas não se responsabiliza por decisões tomadas com base nas
          informações deste blog. As ofertas, promoções e preços mencionados em
          artigos podem sofrer alterações por parte dos anunciantes ou lojas
          parceiras sem aviso prévio. Recomendamos sempre verificar as condições
          diretamente no site do ofertante.
        </p>

        <h2>5. Links Externos</h2>
        <p>
          O blog pode conter links para sites de terceiros. Não possuímos
          controle sobre o conteúdo ou práticas de privacidade desses sites e
          não nos responsabilizamos por eles.
        </p>

        <h2>6. Alterações nos Termos</h2>
        <p>
          Reservamo-nos o direito de modificar estes termos a qualquer momento.
          O uso continuado do site após tais alterações constitui sua aceitação
          dos novos termos.
        </p>

        <p className="text-sm text-zinc-500 mt-8">
          Última atualização: Janeiro de 2025.
        </p>
      </div>
    </div>
  );
}
