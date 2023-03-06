import {
  AleloIcon,
  AmericanExpressIcon,
  DinersClubIcon,
  EconverseIcon,
  EloIcon,
  FacebookIcon,
  IfoodIcon,
  InstagramIcon,
  MasterCardIcon,
  PixIcon,
  SodexoIcon,
  TicketIcon,
  VisaIcon,
  VtexLogo,
  YoutubeIcon,
} from '../../icons';
import Button from '../../shared/Button';
import './Footer.sass';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <article className='footer-grid'>
          <div className='footer-info'>
            <div className='about-us'>
              <h3>Sobre nós</h3>
              <p>Conheça</p>
              <p>Como Comprar</p>
              <p>Indicação e Desconto</p>

              <div className='social-media'>
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
              </div>
            </div>

            <div className='useful-information'>
              <h3>INFORMAÇÕES ÚTEIS</h3>
              <p>Fale Conosco</p>
              <p>Dúvidas</p>
              <p>Prazos de Entrega</p>
              <p>Formas de Pagamento</p>
              <p>Política de privacidade</p>
              <p>Trocas e Devoluções</p>
            </div>

            <div className='payment-methods'>
              <h3>FORMAS DE PAGAMENTO</h3>
              <div className='payment-grid'>
                <VisaIcon />
                <EloIcon />
                <AleloIcon />
                <DinersClubIcon />
                <IfoodIcon />
                <MasterCardIcon />
                <PixIcon />
                <AmericanExpressIcon />
                <TicketIcon />
                <SodexoIcon />
              </div>
            </div>
          </div>

          <div className='newsletter'>
            <h3>
              Cadastre-se e Receba nossas <strong>novidades e promoções</strong>
            </h3>
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>

            <form>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='seu e-mail'
              />
              <Button
                borderRadius={4}
                fontSize={14}
                width={62}
                height={47}
                fontWeight={0}
              >
                OK
              </Button>
            </form>
          </div>
        </article>
      </div>

      <div className='copy'>
        <div className='copy-container'>
          <span>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </span>
          <div className='company-logo'>
            {VtexLogo(88, 32)}
            {EconverseIcon()}
          </div>
        </div>
      </div>
    </footer>
  );
};
