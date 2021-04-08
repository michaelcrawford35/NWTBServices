package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="NWTXAR")
public class NWTXAR {
    @Id
    @Column(name="NWTXAR_PIDM")
    private int NWTXAR_PIDM;
    @Column(name="NWTXAR_SEQ_NO")
    private int NWTXAR_SEQ_NO;
    @Column(name="NWTXAR_DETAIL_CODE")
    private String NWTXAR_DETAIL_CODE;
    @Column(name="NWTXAR_AMOUNT")
    private int NWTXAR_AMOUNT;
    @Column(name="NWTXAR_ACTIVITY_DATE")
    private String NWTXAR_ACTIVITY_DATE;
    @Column(name="NWTXAR_DOCUMENT_NO")
    private String NWTXAR_DOCUMENT_NO;
    @Column(name="NWTXAR_BILL_DATE")
    private Date NWTXAR_BILL_DATE;
    @Column(name="NWTXAR_TERM")
    private String NWTXAR_TERM;

    public int getNWTXAR_PIDM() {
        return NWTXAR_PIDM;
    }

    public void setNWTXAR_PIDM(int NWTXAR_PIDM) {
        this.NWTXAR_PIDM = NWTXAR_PIDM;
    }

    public int getNWTXAR_SEQ_NO() {
        return NWTXAR_SEQ_NO;
    }

    public void setNWTXAR_SEQ_NO(int NWTXAR_SEQ_NO) {
        this.NWTXAR_SEQ_NO = NWTXAR_SEQ_NO;
    }

    public String getNWTXAR_DETAIL_CODE() {
        return NWTXAR_DETAIL_CODE;
    }

    public void setNWTXAR_DETAIL_CODE(String NWTXAR_DETAIL_CODE) {
        this.NWTXAR_DETAIL_CODE = NWTXAR_DETAIL_CODE;
    }

    public int getNWTXAR_AMOUNT() {
        return NWTXAR_AMOUNT;
    }

    public void setNWTXAR_AMOUNT(int NWTXAR_AMOUNT) {
        this.NWTXAR_AMOUNT = NWTXAR_AMOUNT;
    }

    public String getNWTXAR_ACTIVITY_DATE() {
        return NWTXAR_ACTIVITY_DATE;
    }

    public void setNWTXAR_ACTIVITY_DATE(String NWTXAR_ACTIVITY_DATE) {
        this.NWTXAR_ACTIVITY_DATE = NWTXAR_ACTIVITY_DATE;
    }

    public String getNWTXAR_DOCUMENT_NO() {
        return NWTXAR_DOCUMENT_NO;
    }

    public void setNWTXAR_DOCUMENT_NO(String NWTXAR_DOCUMENT_NO) {
        this.NWTXAR_DOCUMENT_NO = NWTXAR_DOCUMENT_NO;
    }

    public Date getNWTXAR_BILL_DATE() {
        return NWTXAR_BILL_DATE;
    }

    public void setNWTXAR_BILL_DATE(Date NWTXAR_BILL_DATE) {
        this.NWTXAR_BILL_DATE = NWTXAR_BILL_DATE;
    }

    public String getNWTXAR_TERM() {
        return NWTXAR_TERM;
    }

    public void setNWTXAR_TERM(String NWTXAR_TERM) {
        this.NWTXAR_TERM = NWTXAR_TERM;
    }
}
