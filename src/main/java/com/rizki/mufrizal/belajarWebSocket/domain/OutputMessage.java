package com.rizki.mufrizal.belajarWebSocket.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by rizki on 11/03/15.
 */

public class OutputMessage extends Message implements Serializable {

    private Date time;

    public OutputMessage(Message message, Date time) {
        super(message.getId(), message.getMessage());
        this.time = time;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
