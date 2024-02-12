function calcularIdade() {
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);
    var ano = parseInt(document.getElementById('ano').value);

    var dataNascimento = new Date(ano, mes - 1, dia);
    var dataAtual = new Date();

    var diff = dataAtual.getTime() - dataNascimento.getTime();

    var idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    var meses = dataAtual.getMonth() - dataNascimento.getMonth();
    var dias = dataAtual.getDate() - dataNascimento.getDate();

    if (meses < 0 || (meses === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
        meses += 12;
    }

    if (dias < 0) {
        var ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }

    document.getElementById('anos').textContent = idade;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
}
