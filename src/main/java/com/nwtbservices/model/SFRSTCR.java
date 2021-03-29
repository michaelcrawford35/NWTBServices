package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="SFRSTCR")
public class SFRSTCR {
    //No idea what to make the Id here, all columns have duplicate data in them.
    @Id
    @NotEmpty
    @Column(name="SFRSTCR_TERM_CODE")
    private String SFRSTCR_TERM_CODE;
    @NotEmpty
    @Column(name="SFRSTCR_PIDM")
    private int SFRSTCR_PIDM;
    @NotEmpty
    @Column(name="SFRSTCR_CRN")
    private String SFRSTCR_CRN;
    @NotEmpty
    @Column(name="SFRSTCR_RSTS_CODE")
    private String SFRSTCR_RSTS_CODE;
    @NotEmpty
    @Column(name="SFRSTCR_LEVL_CODE")
    private String SFRSTCR_LEVL_CODE;

    public String getSFRSTCR_TERM_CODE() {
        return SFRSTCR_TERM_CODE;
    }

    public void setSFRSTCR_TERM_CODE(String SFRSTCR_TERM_CODE) {
        this.SFRSTCR_TERM_CODE = SFRSTCR_TERM_CODE;
    }

    public int getSFRSTCR_PIDM() {
        return SFRSTCR_PIDM;
    }

    public void setSFRSTCR_PIDM(int SFRSTCR_PIDM) {
        this.SFRSTCR_PIDM = SFRSTCR_PIDM;
    }

    public String getSFRSTCR_CRN() {
        return SFRSTCR_CRN;
    }

    public void setSFRSTCR_CRN(String SFRSTCR_CRN) {
        this.SFRSTCR_CRN = SFRSTCR_CRN;
    }

    public String getSFRSTCR_RSTS_CODE() {
        return SFRSTCR_RSTS_CODE;
    }

    public void setSFRSTCR_RSTS_CODE(String SFRSTCR_RSTS_CODE) {
        this.SFRSTCR_RSTS_CODE = SFRSTCR_RSTS_CODE;
    }

    public String getSFRSTCR_LEVL_CODE() {
        return SFRSTCR_LEVL_CODE;
    }

    public void setSFRSTCR_LEVL_CODE(String SFRSTCR_LEVL_CODE) {
        this.SFRSTCR_LEVL_CODE = SFRSTCR_LEVL_CODE;
    }
}
