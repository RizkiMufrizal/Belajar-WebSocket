/**
 * Created by rizki on 11/03/15.
 */

(function () {
    'use strict';
    angular.module('BelajarWebSocket.Controller', ['BelajarWebSocket.Service'])
        .controller('BelajarWebSocketController', BelajarWebSocketController);

    BelajarWebSocketController.$inject = ['BelajarWebSocketService'];

    function BelajarWebSocketController(BelajarWebSocketService) {
        var belajarWebSocket = this;

        belajarWebSocket.messages = [];
        belajarWebSocket.message = '';
        belajarWebSocket.max = 140;

        belajarWebSocket.addMessage = function () {
            BelajarWebSocketService.send(belajarWebSocket.message);
            belajarWebSocket.message = '';
        };

        BelajarWebSocketService.receive().then(null, null, function (message) {
            belajarWebSocket.messages.push(message);
        });

    }

})();