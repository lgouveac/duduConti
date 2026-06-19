-- ============================================================
-- Conti Filmes — seed (dados iniciais)
-- Rode DEPOIS do schema.sql. Pode rodar de novo sem duplicar
-- (usa ON CONFLICT).
-- ============================================================

insert into public.projects (slug, title, role, video_provider, video_id, description, images, sort_order)
values
  ('show-reel-eduardo-conti-2025', 'Show Reel Eduardo Conti 2025', 'Diretor de Fotografia', 'vimeo', '1169946004', '', '["https://framerusercontent.com/images/tQc7lInrayYwNz3XKugD0HdYnhc.png","https://framerusercontent.com/images/5Ob0Q5bfGQShE55RXJAT0VjLK9I.png","https://framerusercontent.com/images/Kr9InlxasQSD18yYH0nFedsbg.png"]'::jsonb, 0),
  ('darrow', 'Darrow', 'Diretor de Fotografia', 'vimeo', '1176568582', 'Na campanha da marca de cosméticos Darrow, atuei como diretor de fotografia, encarregado de criar uma iluminação que valorizasse todos os tons de pele e destacasse o produto de forma eficaz. Optei por uma abordagem técnica, utilizando uma luz de beleza difusa e equilibrada, que realçasse as características naturais de cada modelo, sem distorcer ou alterar seus tons de pele.

Este desafio técnico exigiu uma compreensão profunda das propriedades da luz e uma abordagem sensível para garantir que todos os tons de pele fossem valorizados de maneira igualmente bela.

Além disso, ajustei cuidadosamente a iluminação para garantir que o produto fosse exibido de forma clara e atraente, sem ofuscar a beleza dos modelos.', '["https://framerusercontent.com/images/dJ4vi2HJZuZcDNaOi3P4ZZfYs4.jpg","https://framerusercontent.com/images/yHGD4Xf9xULCNKVYzPW9rHteqO8.jpg","https://framerusercontent.com/images/jo8hzbHKxTPqmtpR1s5JIMHBI.jpg"]'::jsonb, 1),
  ('mondial-de-la-biere', 'Mondial de La Bière', 'Diretor de Fotografia', null, null, 'Hey pessoal! Que privilégio foi fazer parte do Mundial de LaBiere Brasil! Foi um verdadeiro mergulho no universo das cervejas artesanais, com três galpões bombando de cervejarias incríveis. A energia estava contagiante, com gente de todos os cantos celebrando a cultura cervejeira.

Como cinegrafista, tive a missão de capturar toda essa animação, desde os brindes animados até os bastidores das produções.

Foi uma experiência sensorial e visual única, onde cada câmera apontada capturou um pedaço da magia desse evento imperdível. Mal posso esperar pelo próximo!', '["https://framerusercontent.com/images/QXTZ13xpP2SgwAo4BzyIm7Ims.png","https://framerusercontent.com/images/aRmAG5Lm4lhhqvYrurJHqPvedc.png","https://framerusercontent.com/images/QRL3xHLRl6RwiWZ078RgBB7hAs.png"]'::jsonb, 2),
  ('thiaguinho-em-paris', 'Thiaguinho em Paris', 'Diretor de Fotografia e Cinegrafista', 'vimeo', '891106163', 'Como cinegrafista, tive a incrível oportunidade de acompanhar Thiaguinho em uma viagem inesquecível pela Europa, onde o pagode brasileiro encontrou novos palcos. Ao lado dele, embarcamos nessa aventura que nos levou por seis cidades europeias.

De Dublin a Milão, Paris, Amsterdam, Zurique e Genebra, registramos cada momento, cada nota, capturando não apenas a música, mas a atmosfera única de cada lugar.

Uma experiência enriquecedora que me permitiu não só documentar, mas também vivenciar a magia dos shows do Thiaguinho.', '["https://framerusercontent.com/images/Sf9BjfpbDll2bpRy8PQ18PdCfic.png","https://framerusercontent.com/images/Ldlx0Wxa0Im4XzujBmWFwVxw.png","https://framerusercontent.com/images/mgpous1q0sJscOefk1uutCb36Is.png"]'::jsonb, 3),
  ('stella-chefs-rio-monique-gabiati', 'Stella Chefs Rio - Monique Gabiati', 'Cinegrafista', 'vimeo', '1176594327', 'Como cinegrafista do projeto Stella Chef Rio, tive a oportunidade de explorar o vibrante cenário gastronômico do Rio de Janeiro.

Visitamos diversos restaurantes e conhecemos chefs cariocas incríveis, capturando não apenas a arte da culinária, mas também suas inspiradoras histórias.

Foi uma jornada emocionante e inspiradora, compartilhando a paixão e criatividade por trás de cada prato.', '["https://framerusercontent.com/images/AyutekBzSklRLp7vGDB9OhgHajU.png","https://framerusercontent.com/images/WSlqlyfu7aomRrgvyJ3ZKZjDPU.png","https://framerusercontent.com/images/4ORtfnAOMReGOJAJG2icJGTKS68.png"]'::jsonb, 4),
  ('os-garotin', 'Os Garotin', 'Diretor de Fotografia', 'vimeo', '889216622', 'Foi uma experiência incrível participar da cobertura do show da banda Os Garotin no festival Doce Maravilha, atuando como cinegrafista e diretor de fotografia.

Optamos por uma abordagem visual que remetesse ao estilo vintage, trazendo uma atmosfera nostálgica e autêntica para o projeto.

Cada cena capturada foi cuidadosamente planejada para transmitir a energia e a emoção do evento, enquanto destacávamos os talentos da banda e a vibração do público. Foi uma verdadeira celebração da música e da arte.', '["https://framerusercontent.com/images/J6vqlgmlsIEV6EBZogVPnoMotgU.png","https://framerusercontent.com/images/u3eZhICiZkNT3yoj7obhKZBedt4.png","https://framerusercontent.com/images/cRwkVBrDI8Pa073FRU2UXOal4.png"]'::jsonb, 5),
  ('nba-house-rio-2016', 'NBA House Rio - 2016', 'Cinegrafista', 'vimeo', '637075602', 'Durante os Jogos Olímpicos de 2016 no Rio de Janeiro, trabalhei por 10 dias como editor e videomaker na NBA House.

Foi uma experiência intensa e gratificante, capturando os melhores momentos do basquete e transformando-os em conteúdo envolvente para os fãs.

Trabalhar na NBA House foi uma oportunidade única de estar no centro da ação esportiva e contribuir para um ambiente vibrante e empolgante durante os Jogos Olímpicos.', '["https://framerusercontent.com/images/ktAIBF3cpM57bkaWDFLMr91BA.png","https://framerusercontent.com/images/tyzPFIfVEHDykgHHfsSPsm7g.png","https://framerusercontent.com/images/Pt794mbSCydPcliVECyJNWbsqo.png"]'::jsonb, 6),
  ('girls-camp-nba', 'Girls Camp NBA', 'Cinegrafista', 'vimeo', '637079486', 'Participar da gravação no Girls Camp NBA foi uma experiência incrível. Este acampamento de basquete exclusivo para meninas e mulheres proporcionou um ambiente inspirador e inclusivo.

Como cinegrafista, pude capturar a energia e o talento das participantes, destacando a importância do basquete feminino.

Foi gratificante fazer parte desse evento e testemunhar o impacto positivo que o esporte teve na vida das jovens atletas.', '["https://framerusercontent.com/images/6OB1u2cuVOUEuqefziZh3VlDCAk.png","https://framerusercontent.com/images/83tYkkNzkA1OH5XzMoSUVzeMweQ.png","https://framerusercontent.com/images/Cdh7mmRgtBi6grcXUbd4PyQsjkU.png"]'::jsonb, 7),
  ('doc-festival-path-amazonia-2021-joao-farkas', 'Doc Festival Path Amazônia 2021 - João Farkas', 'Cinegrafista', null, null, 'Participar da gravação contando a história do grande fotógrafo João Farkas foi uma oportunidade fascinante. Ao longo do processo, pude explorar e entender a trajetória desse renomado fotógrafo brasileiro, suas influências, e seu legado na cena artística e cultural do país.

Como cinegrafista, tive o privilégio de capturar os detalhes e nuances de sua obra, enquanto entrevistava os especialistas no assunto.

Foi uma experiência enriquecedora, mergulhando no universo criativo de Farkas e contribuindo para compartilhar sua história com o mundo.', '["https://framerusercontent.com/images/EJwHVBai2lTmBbykg0rwTHOEyM.png","https://framerusercontent.com/images/7Yt7hZttt6ohzLp3pr04nEIonw.png","https://framerusercontent.com/images/BHV8J2OY5hFUTkOUuvQhTeIMqY.png"]'::jsonb, 8),
  ('steam-escola-eleva-botafogo', 'STEAM Escola Eleva Botafogo', 'Diretor de Fotografia', 'vimeo', '787679853', 'A cobertura cinematográfica da Steam feira de ciência e tecnologia pela Escola Eleva foi uma imersão visual e técnica extraordinária. Utilizando técnicas de filmagem dinâmicas, como movimentos de câmera fluidos e composições criativas, buscamos capturar a energia pulsante do evento.

Através de planos detalhados e closes expressivos, destacamos os projetos inovadores dos alunos, revelando não apenas os resultados finais, mas também o processo criativo por trás de cada ideia.

O resultado foi uma experiência cinematográfica imersiva que trouxe à vida a celebração da ciência, tecnologia e inovação na Escola Eleva.', '["https://framerusercontent.com/images/C1ps0it07hwZNaV3cfjgAjyNPo.png","https://framerusercontent.com/images/2bFNwYlKKdETIhzRFoGLk84aqs.png","https://framerusercontent.com/images/PPrplQgw1IIwdG1WR5SH9VZbU.png"]'::jsonb, 9),
  ('fato-estudio-projeto-leblon', 'Fato Estúdio - Projeto Leblon', 'Diretor de Fotografia', 'vimeo', '787683071', 'Nesse trabalho com a FATO, minha missão era ir além das imagens estáticas e destacar a essência de cada peça em movimento. Enquanto explorava os detalhes e texturas, buscava ângulos dinâmicos que revelassem a elegância e a simplicidade que os arquitetos Joana Bronze e Pedro Axiotis imprimem em seus projetos.

Cada cena foi cuidadosamente iluminada para ressaltar os aspectos mais marcantes de cada objeto, enquanto os movimentos de câmera suaves proporcionavam uma experiência imersiva, permitindo que os espectadores vissem os objetos de decoração da FATO ganhando vida diante de seus olhos.

O resultado final? Um registro cinematográfico que não apenas mostra os objetos, mas também transmite a atmosfera acolhedora e contemporânea que eles trazem para qualquer ambiente.', '["https://framerusercontent.com/images/GPOqDcKTr0RA8kBtnyA2jWsABM.png","https://framerusercontent.com/images/o0BaIDFVbVrncn2qRApBEXPc5yA.png","https://framerusercontent.com/images/JX0htFctC5n1Y3W5yHEkL8AVJo.png"]'::jsonb, 10),
  ('fato-estudio-projeto-arpoador', 'Fato Estúdio - Projeto Arpoador', 'Diretor de Fotografia', 'vimeo', '787683849', 'Nesse trabalho com a FATO, minha missão era ir além das imagens estáticas e destacar a essência de cada peça em movimento. Enquanto explorava os detalhes e texturas, buscava ângulos dinâmicos que revelassem a elegância e a simplicidade que os arquitetos Joana Bronze e Pedro Axiotis imprimem em seus projetos.

Cada cena foi cuidadosamente iluminada para ressaltar os aspectos mais marcantes de cada objeto, enquanto os movimentos de câmera suaves proporcionavam uma experiência imersiva, permitindo que os espectadores vissem os objetos de decoração da FATO ganhando vida diante de seus olhos.

O resultado final? Um registro cinematográfico que não apenas mostra os objetos, mas também transmite a atmosfera acolhedora e contemporânea que eles trazem para qualquer ambiente.', '["https://framerusercontent.com/images/NalZoJ8wBnxJ2vKGXi0RMuSKbA.png","https://framerusercontent.com/images/Mzk5FZs2mOGkYEdDDDQ8v4Z0fk.png","https://framerusercontent.com/images/ArAzz4wdMaL5huX3D6v6qkk8avM.png"]'::jsonb, 11),
  ('geneal-60-anos', 'GENEAL 60 Anos', 'Diretor de Fotografia', 'vimeo', '859001011', '60 anos de história, sabor e tradição! É com muita alegria que celebramos as seis décadas da icônica marca Geneal de cachorros-quentes, um verdadeiro símbolo do Rio de Janeiro. Desde sua fundação, Geneal conquistou o coração e o paladar dos cariocas e de todos os que visitam nossa cidade maravilhosa.

Cada imagem capturada é um tributo à paixão e ao legado dessa marca querida, que continua a ser um ponto de encontro para gerações de amantes de cachorro-quente.

Que venham mais 60 anos de sucesso e sabor!', '["https://framerusercontent.com/images/dEOJnep6tXF1YFt6XH3xw0Cc.png","https://framerusercontent.com/images/J1N0C6il2J9iuLV6MOCyaGxCIA.png","https://framerusercontent.com/images/78TE1umhCgCkPXs7KxtOfGrOg.png"]'::jsonb, 12),
  ('coco-bambu-plaza-niteroi', 'Coco Bambu - Plaza Niterói', 'Diretor de Fotografia', 'vimeo', '860913326', 'Nesse job com a CocoBambu, busquei não apenas registrar visualmente os espaços e detalhes, mas também transmitir a atmosfera acolhedora e vibrante que o local oferece aos seus clientes.

Ao ajustar cuidadosamente a iluminação e os ângulos de câmera, destaquei os elementos arquitetônicos e decorativos que refletem a identidade do restaurante.

Cada cena foi meticulosamente planejada para capturar não apenas a beleza estética do ambiente, mas também a experiência sensorial de estar no Coco Bambu, desde os pratos deliciosos até o serviço atencioso e o ambiente descontraído.', '["https://framerusercontent.com/images/yMSHagEFuEzUOjk0zFglMlhtPns.png","https://framerusercontent.com/images/oHZxkny1dY5MAoQjpJBHDGDNL8U.png","https://framerusercontent.com/images/YE3xwVPRbwCQyMcJHRDMb1NJVQ.png"]'::jsonb, 13),
  ('fato-objetos-denise-braune', 'Fato Objetos + Denise Braune', 'Diretor de Fotografia', 'vimeo', '891106341', 'Nesse trabalho com a FATO, minha missão era ir além das imagens estáticas e destacar a essência de cada peça em movimento. Enquanto explorava os detalhes e texturas, buscava ângulos dinâmicos que revelassem a elegância e a simplicidade que os arquitetos Joana Bronze e Pedro Axiotis imprimem em seus projetos.

Cada cena foi cuidadosamente iluminada para ressaltar os aspectos mais marcantes de cada objeto, enquanto os movimentos de câmera suaves proporcionavam uma experiência imersiva, permitindo que os espectadores vissem os objetos de decoração da FATO ganhando vida diante de seus olhos.

O resultado final? Um registro cinematográfico que não apenas mostra os objetos, mas também transmite a atmosfera acolhedora e contemporânea que eles trazem para qualquer ambiente.', '["https://framerusercontent.com/images/EWoD0IKKigwovrMT5bFnqKopIFM.png","https://framerusercontent.com/images/qGmpzthIwfvfewnRx2w6ukH5UWc.png","https://framerusercontent.com/images/M7U9fCRF4mtw5LB7Fe5xwSTgUOE.png"]'::jsonb, 14),
  ('farm-inverno-2020-leblon', 'FARM Inverno 2020 - Leblon', 'Diretor de Fotografia', 'vimeo', '891106476', 'O lançamento da coleção Inverno da FARM RIO foi um momento de pura energia e estilo. Como diretor de fotografia encarregado de registrar cada momento desse evento vibrante, mergulhei de cabeça na atmosfera única que a marca trouxe para essa ocasião especial.

A escolha dos ângulos e a iluminação cuidadosamente ajustada ressaltaram a beleza e o charme de cada detalhe, transportando os espectadores para o universo encantador da moda carioca.

O resultado foi um registro visualmente deslumbrante e emocionalmente cativante do lançamento da coleção Inverno da FARM RIO, capturando a essência da marca e celebrando a criatividade brasileira.', '["https://framerusercontent.com/images/g6I83xZ9M2NqiRXxVmGEoUWxBs.png","https://framerusercontent.com/images/utus7JH0eyNKDKeufEEtpbIRKUw.png","https://framerusercontent.com/images/dwqmrZawGZ7tLxmFqujJaMErwU0.png"]'::jsonb, 15),
  ('bjj-stars-the-new-stars', 'BJJ Stars - The New Stars', 'Cinegrafista / Editor', 'vimeo', '891109066', 'Participar como editor e cinegrafista no BJJ: The New Star foi uma experiência incrível.

Capturar a jornada dos competidores e transformar esses momentos em episódios cativantes foi desafiador e gratificante.

Foi uma oportunidade única de mergulhar no mundo do Jiu Jitsu e compartilhar histórias inspiradoras.', '["https://framerusercontent.com/images/tD4sAoBG649pm62oDmwimujHlY.png","https://framerusercontent.com/images/ypKeafBP10FPycZ3uUlinGg.png","https://framerusercontent.com/images/Fhl7xBoz5qUmxSpbEkBWTwPfXg.png"]'::jsonb, 16),
  ('unimed', 'Unimed', 'Diretor de Fotografia', 'vimeo', '786931506', 'A oportunidade de gravar o evento Aula Inusitada da Unimed, na Biblioteca Portuguesa como diretor de fotografia foi uma experiência desafiadora e gratificante. A precisão e o foco exigidos para capturar cada movimento de yoga e cada detalhe do ambiente, foram essenciais para transmitir a serenidade e a energia do evento.

A escolha dos ângulos e a configuração da iluminação foram fundamentais para destacar tanto as posturas de yoga quanto a atmosfera tranquila da Biblioteca Portuguesa.

Este trabalho bem feito contribuiu para criar um registro completo e envolvente do evento da Unimed.', '["https://framerusercontent.com/images/mZhJ9fPSaJ8CT6i9taxDcE9TwzE.png","https://framerusercontent.com/images/E45ee2hgDGgv6Yuio6Ac9fUoZbQ.png","https://framerusercontent.com/images/TF8CQRowMaOHmBQXpVIUXYLVZ68.png"]'::jsonb, 17)
on conflict (slug) do nothing;

insert into public.pages (key, content)
values
  ('site', '{"name_line1":"Eduardo","name_line2":"Conti","tagline":"diretor de fotografia"}'::jsonb),
  ('sobre', '{"image":"https://framerusercontent.com/images/6O5WPIBQPHiSd6HJvZTs8lhkc.jpeg","title":"Sobre","text":"Sou o Eduardo Conti, fotógrafo e cinegrafista na área há mais de 13 anos. Formado em Publicidade, minha vibe é toda sobre criatividade, detalhes e muita técnica. Nasci e cresci no Rio de Janeiro, então já viu, né? Meu trabalho tem aquele jeitinho carioca, cheio de energia e estilo. E, claro, como bom flamenguista e amante da praia, o surf tá sempre no meu radar. Bora embarcar nessa jornada de storytelling e imagens que ficam na memória!"}'::jsonb),
  ('contato', '{"title":"Fala comigo","text":"Tem um projeto em mente? Quer bater um papo sobre vídeo, fotografia ou qualquer ideia criativa? Manda uma mensagem no WhatsApp que a gente conversa.","whatsapp":"5521972031230","whatsapp_message":"Olá Eduardo! Gostaria de conversar sobre um projeto."}'::jsonb)
on conflict (key) do nothing;
