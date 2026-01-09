import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Caju Ofertas Blog",
  description:
    "Conheça as regras e condições para utilização do Blog do Caju Ofertas.",
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1>Termos de Uso</h1>

        <p className="lead">
          Ao acessar e utilizar o Blog do Caju Ofertas, você concorda com os
          termos e condições descritos neste documento.
        </p>

        <h2>1. Finalidade do Conteúdo</h2>
        <p>
          O Blog do Caju Ofertas possui caráter exclusivamente{" "}
          <strong>editorial e informativo</strong>. Os conteúdos publicados
          refletem análises, opiniões e interpretações da equipe editorial no
          momento da publicação.
        </p>
        <p>
          Embora adotemos boas práticas de apuração e atualização, não
          garantimos que todas as informações estejam permanentemente completas,
          exatas ou atualizadas.
        </p>

        <h2>2. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo disponibilizado neste blog, incluindo textos, imagens,
          elementos visuais, logotipos e identidade gráfica, é protegido por
          direitos autorais e demais normas de propriedade intelectual
          aplicáveis.
        </p>
        <p>
          É vedada a reprodução, distribuição, modificação ou utilização
          comercial total ou parcial do conteúdo sem autorização prévia e
          expressa, salvo nos casos permitidos por lei.
        </p>

        <h2>3. Uso Permitido</h2>
        <p>
          O usuário está autorizado a acessar, ler e compartilhar{" "}
          <strong>links</strong> para os conteúdos do blog para fins pessoais e
          não comerciais, desde que mantida a integridade das informações e
          mencionada a fonte.
        </p>

        <h2>4. Limitação de Responsabilidade</h2>
        <p>
          O Caju Ofertas não se responsabiliza por decisões, ações ou prejuízos
          decorrentes do uso das informações disponibilizadas neste blog.
        </p>
        <p>
          Ofertas, promoções, condições comerciais e preços mencionados nos
          conteúdos podem ser alterados por anunciantes, plataformas ou lojas
          parceiras a qualquer momento, sem aviso prévio.
        </p>
        <p>
          Recomendamos que o usuário sempre confirme informações relevantes
          diretamente nos canais oficiais dos ofertantes.
        </p>

        <h2>5. Links para Sites de Terceiros</h2>
        <p>
          O Blog do Caju Ofertas pode conter links para sites ou serviços de
          terceiros. Não exercemos controle sobre o conteúdo, políticas ou
          práticas desses sites e não nos responsabilizamos por suas ações ou
          informações.
        </p>

        <h2>6. Alterações dos Termos</h2>
        <p>
          Estes Termos de Uso podem ser atualizados periodicamente, a critério
          do Caju Ofertas, para refletir mudanças operacionais, legais ou
          editoriais.
        </p>
        <p>
          A continuidade do uso do blog após a publicação de alterações
          representa a aceitação dos novos termos.
        </p>

        <p className="text-sm text-zinc-500 mt-8">
          Última atualização: Janeiro de 2026.
        </p>
      </div>
    </div>
  );
}
