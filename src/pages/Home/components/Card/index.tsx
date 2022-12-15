import {
  Heart,
  HeartBreak,
  MaskSad,
  NotePencil,
  Person,
  YinYang,
} from "phosphor-react";
import {
  Decisao,
  Desilusao,
  Engano,
  FirstDate,
  Start,
  Timeline,
} from "./styles";

export function Card() {
  return (
    <Timeline>
      <FirstDate>
        <div>
          <Heart size={32} />
        </div>
        <div>31-12-2018</div>
        <div>
          <h1>First date</h1>
          <p>
            Nesse dia nossos caminhos se cruzaram porém eu não expressei a mesma
            reação que você. Apenas a tratei como mais uma pessoa que entrou na
            minha vida. Naquela época eu era inocente demais para enxergar o
            amor, só queria saber dos meus jogos e meus amigos.
          </p>
        </div>
      </FirstDate>
      <Desilusao>
        <div>
          <HeartBreak size={32} />
        </div>
        <div>31-12-2019 - 01-05-2022</div>
        <div>
          <h1>DESILUSÃO</h1>
          <p>
            Durante todo esse tempo eu buscava ofuscar o que era evidente "nós",
            por diversos motivos: timidez, medo, etc. Também sei que foi o
            período mais doloroso da sua vida, sofrendo por alguém que mal te
            dava um oi, te mantinha longe. Peço desculpas e espero que um dia eu
            possa-te recompensar por tudo.
          </p>
        </div>
      </Desilusao>
      <Engano>
        <div>
          <MaskSad size={32} />
        </div>
        <div>01-05-2022 - 12-11-2022 </div>
        <div>
          <h1>ENGANO</h1>
          <p>
            O ano de 2022 foi bem maluco, diversas coisas que jamais realizaria,
            aconteceram. Entrei em conflito comigo mesmo, chegando a questionar
            minha existência. Enfim, vamos falar de nós, esse ano foi o que
            ficamos mais próximos, graças a Kadu e seus jogos kkkk. Passando
            mais tempo com você pôde perceber o quão incrível você é, uma mulher
            maravilhosa, com personalidade forte (sabe o que quer e luta com
            todas as forças por isso), muito linda, gostosa rs, inteligente,
            empenhada, etc. São inúmeras qualidades. Com o passar dos dias
            chegou o tão esperado role no cinema, pode ter certeza, fiz de tudo
            para ser só nós dois. Aquela noite foi incrível e muito importante
            para mim decidir que você era o que faltava na minha vida. Amor você
            é responsável por me fazer sorrir todos os dias.
          </p>
        </div>
      </Engano>
      <Decisao>
        <div>
          <Person size={32} />
        </div>
        <div>12-11-2022 - 15-11-2022 </div>
        <div>
          <h1>DECISÃO</h1>
          <p>
            Eu ia te pedir em namoro, mas esperava que fosse após 1-2 meses.
            Porém sua mãe deu o pontapé inicial, coisa que faltava em mim,
            atitude. Durante estes 3 dias, pensei bastante em como seria a gente
            e queria ter certeza dos meus sentimentos para não fazer você sofrer
            denovo. Comecei a amá-la de uma forma inexplicável e não conseguia
            ficar muito tempo longe de você.
          </p>
        </div>
      </Decisao>
      <Start>
        <div>
          <YinYang size={32} />
        </div>
        <div>15-11-2022 </div>
        <div>
          <h1>START</h1>
          <p>
            Aqui estamos um mês que mais parece um ano, um mês cheio de
            briguinhas idiotas e de declarações, um mês cheio de "tô com
            saudades" e "eu te amo", quer saber de uma coisa? Eu te amo, amo seu
            jeito, seu cabelo, seu sorriso, sua voz, amo você por inteira, cada
            dia que passa eu fico mais louco por você, a cada dia desejo mais e
            mais estar com você pro resto da minha vida. Não interessa se vamos
            estar nós beijando, abraçando, trocando olhares, rindo, brigando ou
            chorando, eu só quero estar com você, porque isso que eu gosto de
            fazer, e é o que quero fazer pro resto da minha vida. Em tão pouco
            tempo você já virou o amor da minha vida, isso não é para qualquer
            uma não, minha bombinha, lindona, vidinha, meu amor. <br /> EU TE
            AMO MUITO MUITO MUITO MUITO.
            <br />
            Me perdoa pelas brigas desnecessárias, ou comentários sem graça que
            as vezes falo!!! Além de seu namorado quero que você me veja como
            seu porto seguro, alguém para você se apoiar quando a vida tentar-te
            derrubar, conta comigo para tudo que precisar. <br /> FELIZ 1º MÊS
            AMOR!!!!
          </p>
        </div>
      </Start>
      <Start>
        <div>
          <NotePencil size={32} />
        </div>
        <div>15-12-2022</div>
        <div>
          <h1>BEING WRITTEN...</h1>
        </div>
      </Start>
    </Timeline>
  );
}
