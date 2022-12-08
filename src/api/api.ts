export async function clientGetGames(){

  return [
    {
        "id": 5,
        "name": "Stray",
        "description": "Stray é um jogo de aventura de terceira pessoa protagonizado por um gato, que se passa nos becos detalhados de neon de uma cidade cibernética decadente e seus ambientes sombrios e marginalizados.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4tt2.png",
        "votes": 1000
    },
    {
        "id": 9,
        "name": "Pokémon Legends: Arceus",
        "description": "A trama da jornada apresenta um personagem que é transportado ao passado de Sinnoh por Arceus, quando a terra ainda era conhecida por Hisui e povoada por humanos que não tinham desenvolvido laços com Pokémon. A missão do herói é ajudar os povoados a estudarem Pokémon e desenvolver a primeira Pokédex do mundo.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3d03.png",
        "votes": 151
    },
    {
        "id": 3,
        "name": "God of War: Ragnarok",
        "description": "God of War Ragnarök é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. Foi lançado em 9 de novembro de 2022 para PlayStation 4 e PlayStation 5. É o nono título da série God of War, o nono em ordem cronológica, e a sequência de God of War (2018).",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.png",
        "votes": 150
    },
    {
        "id": 1,
        "name": "A Plague Tale: Requiem",
        "description": "A Plague Tale: Requiem é uma excelente continuação de uma das histórias mais marcantes da atualidade nos games. Com uma direção primorosa, narrativa e gameplay fazem um casamento praticamente perfeito de uma das melhores experiências single player de 2022.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co5pwb.png",
        "votes": 99
    },
    {
        "id": 2,
        "name": "Elden Ring",
        "description": "ELDEN RING, desenvolvido pela FromSoftware, Inc. e pela BANDAI NAMCO Entertainment Inc., é uma aventura de RPG de ação e fantasia ambientada em um mundo criado por Hidetaka Miyazak e George R. R. Martin. O perigo e a descoberta estão à espreita em cada canto do maior jogo da FromSoftware até hoje.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.png",
        "votes": 95
    },
    {
        "id": 4,
        "name": "Horizon: Forbidden West",
        "description": "Horizon Forbidden West é um jogo eletrônico de RPG de ação com uma perspectiva em terceira pessoa. Os jogadores controlam Aloy, uma caçadora em um mundo governado por máquinas. O jogo apresenta um mundo aberto ambientado numa Califórnia pós-apocalíptica.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.png",
        "votes": 94
    },
    {
        "id": 6,
        "name": "Xenoblade Chronicles 3",
        "description": "Um grupo de seis personagens destas nações se une para despertar as colônias de Aionios e expor a verdadeira ameaça que ambas as nações enfrentam. Atravesse paisagens enormes e fantásticas enquanto aprende como este jogo se conecta à história principal de Xenoblade Chronicles™.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ocq.png",
        "votes": 50
    },
    {
        "id": 7,
        "name": "Immortality",
        "description": "Descrito como uma trilogia interativa, Immortality é o novo jogo de Sam Barlow, criador dos aclamados Her Story e Telling Lies, que coloca o jogador para investigar um mistério. Marissa Marcel é uma atriz francesa que estrelou três filmes na carreira.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co55cl.png",
        "votes": 40
    },
    {
        "id": 8,
        "name": "Call of Duty: Modern Warfare 2",
        "description": "O Modern Warfare® II é lançado com uma campanha global para um jogador, combate Multijogador imersivo e um modo melhorado de jogo de Operações Especiais trazendo jogabilidade tática cooperativa. Você também consegue acesso ao Call of Duty®: Warzone™ 2.0, a mais nova experiência Battle Royale.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4sbw.png",
        "votes": 35
    },
    {
        "id": 10,
        "name": "Gran Turismo 7",
        "description": "Gran Turismo 7 reúne os melhores recursos do simulador de corridas online. Seja você um piloto competitivo ou casual, colecionador, tuner, designer de visuais ou fotógrafo. Encontre seu caminho com um número impressionante de modos de jogo, incluindo favoritos dos fãs como Campanha GT, Arcade e Escola de Pilotagem.",
        "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2g84.png",
        "votes": 20
    }
  ]

    // const response = await fetch("https://github.com/falvojr/dio-game-awards/blob/main/docs/mock/games.json");

    // const json = await response.json();

    // return json 
    
}

export async function clientGetGamesReal(){

  const response = await fetch("https://github.com/falvojr/dio-game-awards/blob/main/docs/mock/games.json");

  const json = await response.json();

  return json 
}

export async function clientSendingVotes(){
  
}