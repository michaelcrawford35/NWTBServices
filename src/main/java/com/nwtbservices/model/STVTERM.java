package com.nwtbservices.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;


@Entity
// Must sign into the database inorder to connect the table
@Table(name="STVTERM")
public class STVTERM {
    @Id
    @NotEmpty
    @Column(name="STVTERM_CODE")
    private String STVTERM_CODE;
    @NotEmpty
    @Column(name = "STVTERM_DESC")
    private String STVTERM_DESC ;

    public String getSTVTERM_CODE() {
        return STVTERM_CODE;
    }

    public void setSTVTERM_CODE(String STVTERM_CODE) {
        this.STVTERM_CODE = STVTERM_CODE;
    }

    public String getSTVTERM_DESC() {
        return STVTERM_DESC;
    }

    public void setSTVTERM_DESC(String STVTERM_DESC) {
        this.STVTERM_DESC = STVTERM_DESC;
    }
}