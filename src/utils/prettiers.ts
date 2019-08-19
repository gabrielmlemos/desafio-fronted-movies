export const prettifyDate = (date: string) => {
  if (date) {
    const day = date.substring(8);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);

    return `${day}/${month}/${year}`;
  }

  return "Sem data";
};

export const prettifyRuntime = (minutes: number) => {
  const hour = Math.floor(minutes / 60);
  const minute = (minutes / 60 - hour).toFixed(2);
  const min = Math.floor(parseFloat(minute) * 60);

  return `${hour}h ${min}min`;
};

export const prettifyStatus = (status: string) => {
  switch (status) {
    case "Rumored":
      return "Rumor";
    case "Planned":
      return "Planejado";
    case "In Production":
      return "Em produção";
    case "Post Production":
      return "Pós produção";
    case "Released":
      return "Lançado";
    case "Canceled":
      return "Cancelado";
    default:
      return "Sem informação";
  }
};
