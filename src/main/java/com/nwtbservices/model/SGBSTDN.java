package com.nwtbservices.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="SGBSTDN")
public class SGBSTDN {
    @Id
    @NotEmpty
    @Column(name="SGBSTDN_PIDM")
    private int SGBSTDN_PIDM;
    @NotEmpty
    @Column(name = "SGBSTDN_TERM_CODE_EFF")
    private String SGBSTDN_TERM_CODE_EFF;
    @NotEmpty
    @Column(name = "SGBSTDN_STST_CODE")
    private String SGBSTDN_STST_CODE;
    @Column(name = "SGBSTDN_LEVL_CODE")
    private String SGBSTDN_LEVL_CODE;

    public int getSGBSTDN_PIDM() {
        return SGBSTDN_PIDM;
    }

    public void setSGBSTDN_PIDM(int SGBSTDN_PIDM) {
        this.SGBSTDN_PIDM = SGBSTDN_PIDM;
    }

    public String getSGBSTDN_TERM_CODE_EFF() {
        return SGBSTDN_TERM_CODE_EFF;
    }

    public void setSGBSTDN_TERM_CODE_EFF(String SGBSTDN_TERM_CODE_EFF) {
        this.SGBSTDN_TERM_CODE_EFF = SGBSTDN_TERM_CODE_EFF;
    }

    public String getSGBSTDN_STST_CODE() {
        return SGBSTDN_STST_CODE;
    }

    public void setSGBSTDN_STST_CODE(String SGBSTDN_STST_CODE) {
        this.SGBSTDN_STST_CODE = SGBSTDN_STST_CODE;
    }

    public String getSGBSTDN_LEVL_CODE() {
        return SGBSTDN_LEVL_CODE;
    }

    public void setSGBSTDN_LEVL_CODE(String SGBSTDN_LEVL_CODE) {
        this.SGBSTDN_LEVL_CODE = SGBSTDN_LEVL_CODE;
    }
}
