package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;


@Entity
// Must sign into the database inorder to connect the table
@Table(name="SSRMEET")
public class SSRMEET {
    @NotEmpty
    @Column(name="SSRMEET_TERM_CODE")
    private String SSRMEET_TERM_CODE;
    @Id
    @NotEmpty
    @Column(name = "SSRMEET_CRN")
    private String SSRMEET_CRN ;
    @Column(name = "SSRMEET_BEGIN_TIME")
    private String SSRMEET_BEGIN_TIME;
    @Column(name = "SSRMEET_END_TIME")
    private String SSRMEET_END_TIME;
    @Column(name = "SSRMEET_MON_DAY")
    private String SSRMEET_MON_DAY;
    @Column(name = "SSRMEET_TUE_DAY")
    private String SSRMEET_TUE_DAY;
    @Column(name = "SSRMEET_WED_DAY")
    private String SSRMEET_WED_DAY;
    @Column(name = "SSRMEET_THU_DAY")
    private String SSRMEET_THU_DAY;
    @Column(name = "SSRMEET_FRI_DAY")
    private String SSRMEET_FRI_DAY;

    public String getSSRMEET_TERM_CODE() {
        return SSRMEET_TERM_CODE;
    }

    public void setSSRMEET_TERM_CODE(String SSRMEET_TERM_CODE) {
        this.SSRMEET_TERM_CODE = SSRMEET_TERM_CODE;
    }

    public String getSSRMEET_CRN() {
        return SSRMEET_CRN;
    }

    public void setSSRMEET_CRN(String SSRMEET_CRN) {
        this.SSRMEET_CRN = SSRMEET_CRN;
    }

    public String getSSRMEET_BEGIN_TIME() {
        return SSRMEET_BEGIN_TIME;
    }

    public void setSSRMEET_BEGIN_TIME(String SSRMEET_BEGIN_TIME) {
        this.SSRMEET_BEGIN_TIME = SSRMEET_BEGIN_TIME;
    }

    public String getSSRMEET_END_TIME() {
        return SSRMEET_END_TIME;
    }

    public void setSSRMEET_END_TIME(String SSRMEET_END_TIME) {
        this.SSRMEET_END_TIME = SSRMEET_END_TIME;
    }

    public String getSSRMEET_MON_DAY() {
        return SSRMEET_MON_DAY;
    }

    public void setSSRMEET_MON_DAY(String SSRMEET_MON_DAY) {
        this.SSRMEET_MON_DAY = SSRMEET_MON_DAY;
    }

    public String getSSRMEET_TUE_DAY() {
        return SSRMEET_TUE_DAY;
    }

    public void setSSRMEET_TUE_DAY(String SSRMEET_TUE_DAY) {
        this.SSRMEET_TUE_DAY = SSRMEET_TUE_DAY;
    }

    public String getSSRMEET_WED_DAY() {
        return SSRMEET_WED_DAY;
    }

    public void setSSRMEET_WED_DAY(String SSRMEET_WED_DAY) {
        this.SSRMEET_WED_DAY = SSRMEET_WED_DAY;
    }

    public String getSSRMEET_THU_DAY() {
        return SSRMEET_THU_DAY;
    }

    public void setSSRMEET_THU_DAY(String SSRMEET_THU_DAY) {
        this.SSRMEET_THU_DAY = SSRMEET_THU_DAY;
    }

    public String getSSRMEET_FRI_DAY() {
        return SSRMEET_FRI_DAY;
    }

    public void setSSRMEET_FRI_DAY(String SSRMEET_FRI_DAY) {
        this.SSRMEET_FRI_DAY = SSRMEET_FRI_DAY;
    }
}