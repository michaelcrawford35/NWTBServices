package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="NWTXBN")
public class NWTXBN {
    @Id
    @Column(name="NWTXBN_PIDM")
    private int NWTXBN_PIDM;
    @Column(name="NWTXBN_BAG_NUMBER")
    private int NWTXBN_BAG_NUMBER;

    public int getNWTXBN_PIDM() {
        return NWTXBN_PIDM;
    }

    public void setNWTXBN_PIDM(int NWTXBN_PIDM) {
        this.NWTXBN_PIDM = NWTXBN_PIDM;
    }

    public int getNWTXBN_BAG_NUMBER() {
        return NWTXBN_BAG_NUMBER;
    }

    public void setNWTXBN_BAG_NUMBER(int NWTXBN_BAG_NUMBER) {
        this.NWTXBN_BAG_NUMBER = NWTXBN_BAG_NUMBER;
    }
}
