function calcularEconomia() {
  const temposhower = document.getElementById("tempo-shower").value;
  const novotempo = document.getElementById("new-shower-time").value;
  const banhosemana = document.getElementById("showers-per-week").value;

  const vazaomedia = 9;

  if (temposhower && novotempo && banhosemana) {
    const gastosemanal = temposhower * banhosemana * vazaomedia;
    const novogastosemanal = novotempo * banhosemana * vazaomedia;

    const semana = gastosemanal - novogastosemanal;
    const mes = semana * 4;
    const ano = mes * 52;

    document.getElementById("result").innerHTML = `
        <p>Economia semanal: ${semana} litros</p>
        <p>Economia mensal: ${mes} litros</p>
        <p>Economia anual: ${ano} litros</p>
      `;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p>Por favor, preencha todos os campos.</p>`;
  }
}