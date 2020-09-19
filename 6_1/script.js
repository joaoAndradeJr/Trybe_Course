const estados = ['Acre', 'Alagoas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function insereEstado () {
  for (let index = 0; index < estados.length; index += 1) {
    document.getElementById('estado').appendChild(document.createElement('position'));
    document.getElementsByTagName('position')[index].innerHTML = estados[index];
  }
}
