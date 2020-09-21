let estadosObjeto = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

  const caixaDeSelecao = document.getElementById('estado');

  for (const estado in estadosObjeto) {
    let option = new Option(estadosObjeto[estado], estado);
    caixaDeSelecao.options[caixaDeSelecao.options.length] = option;
  }

 /* clique.addEventListener('click', function () {
    for (let index = 0; index < estados.length; index += 1) {
      document.getElementById('estado').appendChild(document.createElement('position'));
      document.getElementsByTagName('position')[index].setAttribute('value', estados[index]);
      document.getElementsByTagName('position')[index].innerHTML = estados[index];
    }
  });*/
