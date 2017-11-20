<script language="javascript" type="text/javascript">
function validar() {
}
</script>

        2
        3
        4
        5
        6
        7
        8
<script language="javascript" type="text/javascript">
function validar() {
        var nome = form1.nome.value;
        var email = form1.email.value;
        var senha = form1.senha.value;
        var rep_senha = form1.rep_senha.value;
}
</script>

        2
        3
        4
        5
        6
        7
        8
        9
        10
        11
        12
        13
        14
<script language="javascript" type="text/javascript">
function validar() {
        var nome = form1.nome.value;
        var email = form1.email.value;
        var senha = form1.senha.value;
        var rep_senha = form1.rep_senha.value;
        if (nome == "") {
alert('Preencha o campo com seu nome');
        form1.nome.focus();
        return false;
}
}
</script>

        2
        3
        4
        5
        if (senha != rep_senha) {
alert('Senhas diferentes');
        form1.senha.focus();
        return false;
        }