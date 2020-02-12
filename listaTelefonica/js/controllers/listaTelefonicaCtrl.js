angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [{
        nome: "David",
        data: new Date(),
        telefone: "11111111"
    }, {
        nome: "Janete",
        data: new Date(),
        telefone: "22222222"
    }];


    $scope.operadoras = [{
        name: "Oi",
        codigo: 14,
        categoria: "Celular"
    }, {
        name: "Vivo",
        codigo: 15,
        categoria: "Celular"
    }, {
        name: "Tim",
        codigo: 41,
        categoria: "Celular"
    }, {
        name: "Embratel",
        codigo: 12,
        categoria: "Fixo"
    }, {
        name: "GVT",
        codigo: 25,
        categoria: "Fixo"
    }];

    $scope.adicionarContato = function(contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.removerContato = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenaPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

});