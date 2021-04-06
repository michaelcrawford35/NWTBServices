package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="NWTXDT")
public class NWTXDT {
    @Column(name = "NWTXDT_BOOK_CODE")
    private String NWTXDT_BOOK_CODE;
    @Column(name = "NWTXDT_EDITION_YEAR")
    private String NWTXDT_EDITION_YEAR;
    @Column(name = "NWTXDT_SEQ_NR")
    private int NWTXDT_SEQ_NR;
    @Id
    @Column(name = "NWTXDT_BARCODE")
    private String NWTXDT_BARCODE;
    @Column(name = "NWTXDT_PIDM")
    private String NWTXDT_PIDM;
    @Column(name = "NWTXDT_TERM")
    private String NWTXDT_TERM;
    @Column(name = "NWTXDT_DATE_CHECKED_OUT")
    private String NWTXDT_DATE_CHECKED_OUT;
    @Column(name = "NWTXDT_DISPOSITION")
    private String NWTXDT_DISPOSITION;
    @Column(name = "NWTXDT_BOOK_SALE_PRICE")
    private Float NWTXDT_BOOK_SALE_PRICE;
    @Column(name = "NWTXDT_PREV_PIDM")
    private int NWTXDT_PREV_PIDM;
    @Column(name = "NWTXDT_PREV_TERM")
    private String NWTXDT_PREV_TERM;
    @Column(name = "NWTXDT_PREV_DATE_CHECKED_IN")
    private Date NWTXDT_PREV_DATE_CHECKED_IN;
    @Column(name = "NWTXDT_ACTIVITY_DATE")
    private Date NWTXDT_ACTIVITY_DATE;
    @Column(name = "NWTXDT_BILLABLE_FLAG")
    private String NWTXDT_BILLABLE_FLAG;

    public String getNWTXDT_BOOK_CODE() {
        return NWTXDT_BOOK_CODE;
    }

    public void setNWTXDT_BOOK_CODE(String NWTXDT_BOOK_CODE) {
        this.NWTXDT_BOOK_CODE = NWTXDT_BOOK_CODE;
    }

    public String getNWTXDT_EDITION_YEAR() {
        return NWTXDT_EDITION_YEAR;
    }

    public void setNWTXDT_EDITION_YEAR(String NWTXDT_EDITION_YEAR) {
        this.NWTXDT_EDITION_YEAR = NWTXDT_EDITION_YEAR;
    }

    public int getNWTXDT_SEQ_NR() {
        return NWTXDT_SEQ_NR;
    }

    public void setNWTXDT_SEQ_NR(int NWTXDT_SEQ_NR) {
        this.NWTXDT_SEQ_NR = NWTXDT_SEQ_NR;
    }

    public String getNWTXDT_BARCODE() {
        return NWTXDT_BARCODE;
    }

    public void setNWTXDT_BARCODE(String NWTXDT_BARCODE) {
        this.NWTXDT_BARCODE = NWTXDT_BARCODE;
    }

    public String getNWTXDT_PIDM() {
        return NWTXDT_PIDM;
    }

    public void setNWTXDT_PIDM(String NWTXDT_PIDM) {
        this.NWTXDT_PIDM = NWTXDT_PIDM;
    }

    public String getNWTXDT_TERM() {
        return NWTXDT_TERM;
    }

    public void setNWTXDT_TERM(String NWTXDT_TERM) {
        this.NWTXDT_TERM = NWTXDT_TERM;
    }

    public String getNWTXDT_DATE_CHECKED_OUT() {
        return NWTXDT_DATE_CHECKED_OUT;
    }

    public void setNWTXDT_DATE_CHECKED_OUT(String NWTXDT_DATE_CHECKED_OUT) {
        this.NWTXDT_DATE_CHECKED_OUT = NWTXDT_DATE_CHECKED_OUT;
    }

    public String getNWTXDT_DISPOSITION() {
        return NWTXDT_DISPOSITION;
    }

    public void setNWTXDT_DISPOSITION(String NWTXDT_DISPOSITION) {
        this.NWTXDT_DISPOSITION = NWTXDT_DISPOSITION;
    }

    public Float getNWTXDT_BOOK_SALE_PRICE() {
        return NWTXDT_BOOK_SALE_PRICE;
    }

    public void setNWTXDT_BOOK_SALE_PRICE(Float NWTXDT_BOOK_SALE_PRICE) {
        this.NWTXDT_BOOK_SALE_PRICE = NWTXDT_BOOK_SALE_PRICE;
    }

    public int getNWTXDT_PREV_PIDM() {
        return NWTXDT_PREV_PIDM;
    }

    public void setNWTXDT_PREV_PIDM(int NWTXDT_PREV_PIDM) {
        this.NWTXDT_PREV_PIDM = NWTXDT_PREV_PIDM;
    }

    public String getNWTXDT_PREV_TERM() {
        return NWTXDT_PREV_TERM;
    }

    public void setNWTXDT_PREV_TERM(String NWTXDT_PREV_TERM) {
        this.NWTXDT_PREV_TERM = NWTXDT_PREV_TERM;
    }

    public Date getNWTXDT_PREV_DATE_CHECKED_IN() {
        return NWTXDT_PREV_DATE_CHECKED_IN;
    }

    public void setNWTXDT_PREV_DATE_CHECKED_IN(Date NWTXDT_PREV_DATE_CHECKED_IN) {
        this.NWTXDT_PREV_DATE_CHECKED_IN = NWTXDT_PREV_DATE_CHECKED_IN;
    }

    public Date getNWTXDT_ACTIVITY_DATE() {
        return NWTXDT_ACTIVITY_DATE;
    }

    public void setNWTXDT_ACTIVITY_DATE(Date NWTXDT_ACTIVITY_DATE) {
        this.NWTXDT_ACTIVITY_DATE = NWTXDT_ACTIVITY_DATE;
    }

    public String getNWTXDT_BILLABLE_FLAG() {
        return NWTXDT_BILLABLE_FLAG;
    }

    public void setNWTXDT_BILLABLE_FLAG(String NWTXDT_BILLABLE_FLAG) {
        this.NWTXDT_BILLABLE_FLAG = NWTXDT_BILLABLE_FLAG;
    }
}
