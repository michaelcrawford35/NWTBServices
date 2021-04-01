package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="NWTXCM")
public class NWTXCM {
    @Id
    @Column(name = "NWTXCM_COURSE")
    private String NWTXCM_COURSE;
    @Column(name = "NWTXCM_MESSAGE")
    private String NWTXCM_MESSAGE;
    @Column(name = "NWTXCM_ACTIVITY_DATE")
    private String NWTXCM_ACTIVITY_DATE;

    public String getNWTXCM_COURSE() {
        return NWTXCM_COURSE;
    }

    public void setNWTXCM_COURSE(String NWTXCM_COURSE) {
        this.NWTXCM_COURSE = NWTXCM_COURSE;
    }

    public String getNWTXCM_MESSAGE() {
        return NWTXCM_MESSAGE;
    }

    public void setNWTXCM_MESSAGE(String NWTXCM_MESSAGE) {
        this.NWTXCM_MESSAGE = NWTXCM_MESSAGE;
    }

    public String getNWTXCM_ACTIVITY_DATE() {
        return NWTXCM_ACTIVITY_DATE;
    }

    public void setNWTXCM_ACTIVITY_DATE(String NWTXCM_ACTIVITY_DATE) {
        this.NWTXCM_ACTIVITY_DATE = NWTXCM_ACTIVITY_DATE;
    }
}
