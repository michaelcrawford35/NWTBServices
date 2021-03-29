package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="SCBCRSE")
public class SCBCRSE {
    //No idea what to make the Id here, all columns have duplicate data in them.
    @Id
    @NotEmpty
    @Column(name="SCBCRSE_SUBJ_CODE")
    private String SCBRSE_SUBJ_CODE;
    @NotEmpty
    @Column(name="SCBCRSE_CRSE_NUMB")
    private String SCBCRSE_CRSE_NUMB;
    @NotEmpty
    @Column(name="SCBCRSE_EFF_TERM")
    private String SCBCRSE_EFF_TERM;
    @NotEmpty
    @Column(name="SCBCRSE_TITLE")
    private String SCBCRSE_TITLE;

    public String getSCBRSE_SUBJ_CODE() {
        return SCBRSE_SUBJ_CODE;
    }

    public void setSCBRSE_SUBJ_CODE(String SCBRSE_SUBJ_CODE) {
        this.SCBRSE_SUBJ_CODE = SCBRSE_SUBJ_CODE;
    }

    public String getSCBCRSE_CRSE_NUMB() {
        return SCBCRSE_CRSE_NUMB;
    }

    public void setSCBCRSE_CRSE_NUMB(String SCBCRSE_CRSE_NUMB) {
        this.SCBCRSE_CRSE_NUMB = SCBCRSE_CRSE_NUMB;
    }

    public String getSCBCRSE_EFF_TERM() {
        return SCBCRSE_EFF_TERM;
    }

    public void setSCBCRSE_EFF_TERM(String SCBCRSE_EFF_TERM) {
        this.SCBCRSE_EFF_TERM = SCBCRSE_EFF_TERM;
    }

    public String getSCBCRSE_TITLE() {
        return SCBCRSE_TITLE;
    }

    public void setSCBCRSE_TITLE(String SCBCRSE_TITLE) {
        this.SCBCRSE_TITLE = SCBCRSE_TITLE;
    }
}
