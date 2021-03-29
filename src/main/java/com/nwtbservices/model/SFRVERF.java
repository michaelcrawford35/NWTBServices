package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="SFRVERF")
public class SFRVERF {
    //No idea what to make the Id here, all columns have duplicate data in them.
    @Id
    @NotEmpty
    @Column(name="SFRVERF_PIDM")
    private int SFRVERF_PIDM;
    @NotEmpty
    @Column(name="SFRVERF_TERM_CODE")
    private String SFRVERF_TERM_CODE;
    @NotEmpty
    @Column(name="SFRVERF_ACTIVITY_DATE")
    private String SFRVERF_ACTIVITY_DATE;
    @NotEmpty
    @Column(name="SFRVERF_LEVL_CODE")
    private String SFRVERF_LEVL_CODE;
    @NotEmpty
    @Column(name="SFRVERF_CANCEL_FLAG")
    private String SFRVERF_CANCEL_FLAG;

    public int getSFRVERF_PIDM() {
        return SFRVERF_PIDM;
    }

    public void setSFRVERF_PIDM(int SFRVERF_PIDM) {
        this.SFRVERF_PIDM = SFRVERF_PIDM;
    }

    public String getSFRVERF_TERM_CODE() {
        return SFRVERF_TERM_CODE;
    }

    public void setSFRVERF_TERM_CODE(String SFRVERF_TERM_CODE) {
        this.SFRVERF_TERM_CODE = SFRVERF_TERM_CODE;
    }

    public String getSFRVERF_ACTIVITY_DATE() {
        return SFRVERF_ACTIVITY_DATE;
    }

    public void setSFRVERF_ACTIVITY_DATE(String SFRVERF_ACTIVITY_DATE) {
        this.SFRVERF_ACTIVITY_DATE = SFRVERF_ACTIVITY_DATE;
    }

    public String getSFRVERF_LEVL_CODE() {
        return SFRVERF_LEVL_CODE;
    }

    public void setSFRVERF_LEVL_CODE(String SFRVERF_LEVL_CODE) {
        this.SFRVERF_LEVL_CODE = SFRVERF_LEVL_CODE;
    }

    public String getSFRVERF_CANCEL_FLAG() {
        return SFRVERF_CANCEL_FLAG;
    }

    public void setSFRVERF_CANCEL_FLAG(String SFRVERF_CANCEL_FLAG) {
        this.SFRVERF_CANCEL_FLAG = SFRVERF_CANCEL_FLAG;
    }
}
