import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Caju Ofertas Blog",
  description: "Entenda como tratamos seus dados no Blog do Caju Ofertas.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1>Política de Privacidade</h1>
        <p className="lead">
          Sua privacidade é importante para nós. Esta política descreve como o
          Blog do Caju Ofertas lida com informações.
        </p>

        <h2>1. Escopo</h2>
        <p>
          Esta política aplica-se exclusivamente ao conteúdo editorial e
          informativo disponibilizado no Blog do Caju Ofertas. Ela não cobre
          outros serviços ou plataformas da marca Caju Ofertas que possam ter
          seus próprios termos.
        </p>

        <h2>2. Coleta de Dados e Cookies</h2>
        <p>
          Este blog é de natureza informativa e não exige cadastro, login ou
          fornecimento de dados pessoais sensíveis para o consumo de conteúdo.
        </p>
        <p>
          Utilizamos cookies e tecnologias similares apenas para fins de{" "}
          <strong>análise de tráfego (analytics)</strong>, visando entender
          quais conteúdos são mais relevantes para nossa audiência e melhorar a
          experiência de leitura.
        </p>
        <p>
          Esses dados são coletados de forma agregada e anônima, não permitindo
          a identificação direta do usuário.
        </p>

        <h2>3. Consentimento</h2>
        <p>
          Ao acessar nosso blog pela primeira vez, você tem a opção de aceitar
          ou recusar o uso de cookies de análise através de nosso banner de
          consentimento. Nenhuma coleta estatística é realizada antes do seu
          consentimento explícito.
        </p>
        <p>
          Você pode alterar sua preferência a qualquer momento limpando os dados
          de navegação do seu navegador para este site.
        </p>

        <h2>4. Compartilhamento de Dados</h2>
        <p>
          Não vendemos, trocamos ou transferimos suas informações pessoais para
          terceiros. Os dados de análise são processados pelo Google Analytics
          seguindo rigorosos padrões de segurança e privacidade.
        </p>

        <h2>5. Seus Direitos (LGPD)</h2>
        <p>
          Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a
          transparência sobre o tratamento de seus dados. Como nosso blog opera
          com dados minimizados e anonimizados para fins estatísticos, o risco à
          sua privacidade é extremamente baixo.
        </p>

        <h2>6. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta política periodicamente para refletir mudanças
          em nossas práticas ou por razões operacionais, legais ou regulatórias.
        </p>

        <p className="text-sm text-zinc-500 mt-8">
          Última atualização: Janeiro de 2025.
        </p>
      </div>
    </div>
  );
}
