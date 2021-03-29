package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="SSBSECT")
public class SSBSECT {
    @Id
    @NotEmpty
    @Column(name="SSBSECT_TERM_CODE")
    private String SSBSECT_TERM_CODE;
    @NotEmpty
    @Column(name = "SSBSECT_CRN")
    private String SSBSECT_CRN ;
    @Column(name = "SSBSECT_PTRM_CODE")
    private String SSBSECT_PTRM_CODE;
    @NotEmpty
    @Column(name = "SSBSECT_SUBJ_CODE")
    private String SSBSECT_SUBJ_CODE;
    @NotEmpty
    @Column(name = "SSBSECT_CRSE_NUMB")
    private String SSBSECT_CRSE_NUMB;
    @NotEmpty
    @Column(name = "SSBSECT_SEQ_NUMB")
    private String SSBSECT_SEQ_NUMB;

    public String getSSBSECT_TERM_CODE() {
        return SSBSECT_TERM_CODE;
    }

    public void setSSBSECT_TERM_CODE(String SSBSECT_TERM_CODE) {
        this.SSBSECT_TERM_CODE = SSBSECT_TERM_CODE;
    }

    public String getSSBSECT_CRN() {
        return SSBSECT_CRN;
    }

    public void setSSBSECT_CRN(String SSBSECT_CRN) {
        this.SSBSECT_CRN = SSBSECT_CRN;
    }

    public String getSSBSECT_PTRM_CODE() {
        return SSBSECT_PTRM_CODE;
    }

    public void setSSBSECT_PTRM_CODE(String SSBSECT_PTRM_CODE) {
        this.SSBSECT_PTRM_CODE = SSBSECT_PTRM_CODE;
    }

    public String getSSBSECT_SUBJ_CODE() {
        return SSBSECT_SUBJ_CODE;
    }

    public void setSSBSECT_SUBJ_CODE(String SSBSECT_SUBJ_CODE) {
        this.SSBSECT_SUBJ_CODE = SSBSECT_SUBJ_CODE;
    }

    public String getSSBSECT_CRSE_NUMB() {
        return SSBSECT_CRSE_NUMB;
    }

    public void setSSBSECT_CRSE_NUMB(String SSBSECT_CRSE_NUMB) {
        this.SSBSECT_CRSE_NUMB = SSBSECT_CRSE_NUMB;
    }

    public String getSSBSECT_SEQ_NUMB() {
        return SSBSECT_SEQ_NUMB;
    }

    public void setSSBSECT_SEQ_NUMB(String SSBSECT_SEQ_NUMB) {
        this.SSBSECT_SEQ_NUMB = SSBSECT_SEQ_NUMB;
    }
}
