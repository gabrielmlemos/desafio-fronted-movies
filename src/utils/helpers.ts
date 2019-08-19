export const getGenreNames = (id: number) => {
  switch (id) {
    case 28:
      return "Ação";
    case 12:
      return "Aventura";
    case 16:
      return "Animação";
    case 35:
      return "Comédia";
    case 80:
      return "Crime";
    case 99:
      return "Documentário";
    case 18:
      return "Drama";
    case 10751:
      return "Família";
    case 14:
      return "Fantasia";
    case 36:
      return "História";
    case 27:
      return "Terror";
    case 10402:
      return "Música";
    case 9648:
      return "Mistério";
    case 10749:
      return "Romance";
    case 878:
      return "Ficção científica";
    case 10770:
      return "Cinema TV";
    case 53:
      return "Thriller";
    case 10752:
      return "Guerra";
    case 37:
      return "Faroeste";
    default:
      return "";
  }
};

export const getGenreId = (name: string) => {
  switch (name.toUpperCase()) {
    case "AÇÃO":
      return 28;
    case "AVENTURA":
      return 12;
    case "ANIMAÇÃO":
      return 16;
    case "COMÉDIA":
      return 35;
    case "CRIME":
      return 80;
    case "DOCUMENTÁRIO":
      return 99;
    case "DRAMA":
      return 18;
    case "FAMÍLIA":
      return 10751;
    case "FANTASIA":
      return 14;
    case "HISTÓRIA":
      return 36;
    case "TERROR":
      return 27;
    case "MÚSICA":
      return 10402;
    case "MISTÉRIO":
      return 9648;
    case "ROMANCE":
      return 10749;
    case "FICÇÃO CIENTÍFICA":
      return 878;
    case "CINEMA TV":
      return 10770;
    case "THRILLER":
      return 53;
    case "GUERRA":
      return 10752;
    case "FAROESTE":
      return 37;
    default:
      return null;
  }
};

export const getLanguages = (abbreviation: string) => {
  switch (abbreviation) {
    case "en":
      return "Inglês";
    case "pt":
      return "Português";
    case "es":
      return "Espanhol";
    case "zh":
      return "Chinês";
    case "fr":
      return "Francês";
    case "hi":
      return "Hindi";
    case "it":
      return "Italiano";
    case "ja":
      return "Japonês";
    case "ko":
      return "Coreano";
    case "de":
      return "Alemão";
    default:
      return "Inglês";
  }
};

export const toCurrencyString = (value: number) => {
  let currency: string;

  if (value === 0) {
    currency = "Sem informação";
  } else {
    currency = `R$ ${(value / 100).toFixed(2).replace(".", ",")}`;
  }

  return currency;
};
