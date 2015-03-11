/**
 * Created by rizki on 11/03/15.
 */

(function () {
    'use strict';
    angular.module('BelajarWebSocket.Service', [])
        .service('BelajarWebSocketService', BelajarWebSocketService);

    BelajarWebSocketService.$inject = ['$q', '$timeout'];

    function BelajarWebSocketService($q, $timeout) {
        var belajarWebSocketService = this;

        belajarWebSocketService.listener = $q.defer();
        belajarWebSocketService.socket = {
            client: null,
            stomp: null
        };
        belajarWebSocketService.messageIds = [];

        belajarWebSocketService.RECONNECT_TIMEOUT = 30000;
        belajarWebSocketService.SOCKET_URL = '/chat';
        belajarWebSocketService.CHAT_TOPIC = '/topic/message';
        belajarWebSocketService.CHAT_BROKER = '/app/chat';

        belajarWebSocketService.receive = function () {
            return belajarWebSocketService.listener.promise;
        };

        belajarWebSocketService.send = function (message) {
            belajarWebSocketService.id = Math.floor(Math.random() * 1000000);
            belajarWebSocketService.socket.stomp.send(belajarWebSocketService.CHAT_BROKER, {
                priority: 9
            }, JSON.stringify({
                message: message,
                id: belajarWebSocketService.id
            }));
            belajarWebSocketService.messageIds.push(belajarWebSocketService.id);
        };

        belajarWebSocketService.reconnect = function () {
            $timeout(function () {
                belajarWebSocketService.initialize();
            }, belajarWebSocketService.RECONNECT_TIMEOUT);
        };

        belajarWebSocketService.getMessage = function (data) {
            belajarWebSocketService.message = JSON.parse(data);
            belajarWebSocketService.out = {};
            belajarWebSocketService.out.message = belajarWebSocketService.message.message;
            belajarWebSocketService.out.time = new Date(belajarWebSocketService.message.time);

            if (_.contains(belajarWebSocketService.messageIds, belajarWebSocketService.message.id)) {
                belajarWebSocketService.out.self = true;
                belajarWebSocketService.messageIds = _.remove(belajarWebSocketService.messageIds, belajarWebSocketService.message.id);
            }

            return belajarWebSocketService.out;
        };

        belajarWebSocketService.startListener = function () {
            belajarWebSocketService.socket.stomp.subscribe(belajarWebSocketService.CHAT_TOPIC, function (data) {
                belajarWebSocketService.listener.notify(belajarWebSocketService.getMessage(data.body));
            });
        };

        belajarWebSocketService.initialize = function () {
            belajarWebSocketService.socket.client = new SockJS(belajarWebSocketService.SOCKET_URL);
            belajarWebSocketService.socket.stomp = Stomp.over(belajarWebSocketService.socket.client);
            belajarWebSocketService.socket.stomp.connect({}, belajarWebSocketService.startListener);
            belajarWebSocketService.socket.stomp.onclose = belajarWebSocketService.reconnect;
        };

        belajarWebSocketService.initialize();

        return belajarWebSocketService;

    }

})();