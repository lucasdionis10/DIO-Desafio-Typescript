// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz
};
var pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.padeiro
};
var pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
};
var pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
