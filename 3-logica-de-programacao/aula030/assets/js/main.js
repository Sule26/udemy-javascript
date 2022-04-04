function showTime() {
    let text = document.querySelector('.container h1');
    text.innerHTML = getCompleteDate();
    /* const data = new Date();
    const opcoes = {
        dateStyle: 'full',
        timeStyle: 'short',
    };
    text.innerHTML = data.toLocaleDateString('pt-BR', opcoes); */

    
}

function getCompleteDate() {
  const data = new Date();

  const date = data.getDate();
  const dayWeek = getDay(data.getDay());
  const month = getMonth(data.getMonth());
  const year = data.getFullYear();
  const hour = data.getHours();
  const minute = data.getMinutes();

  return `${dayWeek}, ${zeroLeft(date)} de ${month} de ${year} ${zeroLeft(hour)}:${zeroLeft(minute)}`;
}

function getDay(dayWeek) {
  switch (dayWeek) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    default:
      return "Dia inválido";
  }
}

function getMonth(month) {
  switch (month) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}

function zeroLeft (n) {
    return n >= 10 ? n : `0${n}`
}


const opcoes = {
    dataStyle: 'full'
};


