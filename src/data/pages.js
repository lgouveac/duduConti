// Conteúdo padrão das páginas (fallback). É também o conteúdo usado para
// popular a tabela `pages` no Supabase (seed). Cada chave vira uma linha.
export const defaultPages = {
  site: {
    name_line1: 'Eduardo',
    name_line2: 'Conti',
    tagline: 'diretor de fotografia',
  },
  sobre: {
    image: 'https://framerusercontent.com/images/6O5WPIBQPHiSd6HJvZTs8lhkc.jpeg',
    title: 'Sobre',
    text:
      'Sou o Eduardo Conti, fotógrafo e cinegrafista na área há mais de 13 anos. ' +
      'Formado em Publicidade, minha vibe é toda sobre criatividade, detalhes e ' +
      'muita técnica. Nasci e cresci no Rio de Janeiro, então já viu, né? Meu ' +
      'trabalho tem aquele jeitinho carioca, cheio de energia e estilo. E, claro, ' +
      'como bom flamenguista e amante da praia, o surf tá sempre no meu radar. ' +
      'Bora embarcar nessa jornada de storytelling e imagens que ficam na memória!',
  },
  contato: {
    title: 'Fala comigo',
    text:
      'Tem um projeto em mente? Quer bater um papo sobre vídeo, fotografia ou ' +
      'qualquer ideia criativa? Manda uma mensagem no WhatsApp que a gente conversa.',
    whatsapp: '5521972031230',
    whatsapp_message: 'Olá Eduardo! Gostaria de conversar sobre um projeto.',
  },
}
