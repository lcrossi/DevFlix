import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {      //cabeçalho cm as infos que estamos enviando
      'Content-type': 'application/json',  //informando qual o tio de arquivo que o browser vai ler 
    },
    body: JSON.stringify(objetoDoVideo), //enviando o conteúdo que queremos, como só envia texto pela web, stringfy converte o obj em texto
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};