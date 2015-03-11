package com.rizki.mufrizal.belajarWebSocket.controller;

import com.rizki.mufrizal.belajarWebSocket.domain.Message;
import com.rizki.mufrizal.belajarWebSocket.domain.OutputMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;

/**
 * Created by rizki on 11/03/15.
 */

@Controller
@RequestMapping(value = "/")
public class MessageController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageController.class);

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        LOGGER.debug("Redirect Index Page");
        return "index";
    }

    @MessageMapping("/chat")
    @SendTo("/topic/message")
    public OutputMessage sendMessage(Message message) {
        LOGGER.debug("Return Message");
        return new OutputMessage(message, new Date());
    }

}
