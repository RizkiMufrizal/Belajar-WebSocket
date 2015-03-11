package com.rizki.mufrizal.belajarWebSocket.domain;

import java.io.Serializable;

/**
 * Created by rizki on 11/03/15.
 */

public class Message implements Serializable {

    private int id;
    private String message;

    public Message() {

    }

    public Message(int id, String message) {
        this.id = id;
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
