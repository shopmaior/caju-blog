import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Caju Ofertas Blog",
  description:
    "Saiba como o Blog do Caju Ofertas trata dados pessoais, cookies e informações de navegação.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1>Política de Privacidade</h1>

        <p className="lead">
          A sua privacidade é importante para nós. Esta Política de Privacidade
          explica de forma transparente como o Blog do Caju Ofertas trata dados
          relacionados à navegação dos usuários.
        </p>

        <h2>1. Escopo</h2>
        <p>
          Esta política aplica-se exclusivamente ao conteúdo editorial e
          informativo disponibilizado no <strong>Blog do Caju Ofertas</strong>.
          Outros produtos, serviços ou plataformas da marca Caju Ofertas podem
          possuir políticas próprias e independentes.
        </p>

        <h2>2. Coleta de Dados e Uso de Cookies</h2>
        <p>
          O Blog do Caju Ofertas possui caráter estritamente informativo e não
          exige cadastro, login ou fornecimento direto de dados pessoais para o
          acesso ao conteúdo.
        </p>
        <p>
          Utilizamos cookies e tecnologias similares exclusivamente para fins de{" "}
          <strong>análise estatística de navegação (analytics)</strong>, com o
          objetivo de compreender padrões de uso, identificar conteúdos de maior
          interesse e aprimorar a experiência de leitura.
        </p>
        <p>
          As informações coletadas são tratadas de forma agregada e, sempre que
          possível, anonimizadas, não sendo utilizadas para identificação direta
          ou individualizada dos usuários.
        </p>

        <h2>3. Base Legal e Consentimento</h2>
        <p>
          O uso de cookies de análise é realizado com base no{" "}
          <strong>consentimento do usuário</strong>, conforme previsto na Lei
          Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>
        <p>
          Nenhuma coleta estatística é iniciada antes da manifestação explícita
          de consentimento por meio do banner exibido no primeiro acesso ao
          blog.
        </p>
        <p>
          O usuário pode, a qualquer momento, rever ou revogar esse
          consentimento por meio das configurações do navegador, incluindo a
          limpeza de cookies e dados de navegação relacionados a este site.
        </p>

        <h2>4. Compartilhamento e Processamento de Dados</h2>
        <p>
          Não comercializamos, vendemos ou compartilhamos dados pessoais dos
          usuários com terceiros.
        </p>
        <p>
          As informações de navegação coletadas para fins analíticos podem ser
          processadas por ferramentas de terceiros, como o Google Analytics,
          sempre em conformidade com práticas reconhecidas de segurança e
          privacidade e com configurações voltadas à minimização de dados.
        </p>

        <h2>5. Direitos do Titular (LGPD)</h2>
        <p>
          Nos termos da LGPD, o titular dos dados tem direito à informação clara
          e transparente sobre o tratamento de seus dados pessoais.
        </p>
        <p>
          Considerando que o Blog do Caju Ofertas opera com coleta limitada,
          finalidade específica e foco em dados estatísticos e não sensíveis, o
          impacto à privacidade do usuário é reduzido.
        </p>

        <h2>6. Alterações nesta Política</h2>
        <p>
          Esta Política de Privacidade poderá ser atualizada periodicamente para
          refletir eventuais mudanças operacionais, legais ou regulatórias.
          Recomendamos a consulta periódica desta página para manter-se
          informado.
        </p>

        <p className="text-sm text-zinc-500 mt-8">
          Última atualização: Janeiro de 2026.
        </p>
      </div>
    </div>
  );
}
