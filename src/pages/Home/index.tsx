import { Card } from "./components/Card";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <p>
        Olá, Larissa Nepomuceno Mourão <br />
        <br />
        posso chama-lá de <br />
        <br />
        <strong>AMOR DA MINHA VIDA?</strong>
      </p>
      <br />
      <br />
      <p>
        Não sou bom com palavras e muito menos em expressar meus sentimentos mas
        fiz uma timeline da nossa história até o presente momento
      </p>
      <br />
      <p>
        <strong>
          Espero que possamos continuar escrevendo-a pelo resto de nossas
          vidas!!!
        </strong>
      </p>
      <Card />
    </HomeContainer>
  );
}
