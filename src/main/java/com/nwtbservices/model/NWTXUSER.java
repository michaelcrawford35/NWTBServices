package com.nwtbservices.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
// Must sign into the database inorder to connect the table
@Table(name="NWTXUSER")
public class NWTXUSER {
    @Id
    @NotEmpty
    @Column(name="NWTXUSER_USER")
    private String NWTXUSER_USER;
    @NotEmpty
    @Column(name="NWTXUSER_PASS")
    private String NWTXUSER_PASS;
    @NotEmpty
    @Column(name="NWTXUSER_ADMIN")
    private String NWTXUSER_ADMIN;

    public String getNWTXUSER_USER() {
        return NWTXUSER_USER;
    }

    public void setNWTXUSER_USER(String NWTXUSER_USER) {
        this.NWTXUSER_USER = NWTXUSER_USER;
    }

    public String getNWTXUSER_PASS() {
        return NWTXUSER_PASS;
    }

    public void setNWTXUSER_PASS(String NWTXUSER_PASS) {
        this.NWTXUSER_PASS = NWTXUSER_PASS;
    }

    public String getNWTXUSER_ADMIN() {
        return NWTXUSER_ADMIN;
    }

    public void setNWTXUSER_ADMIN(String NWTXUSER_ADMIN) {
        this.NWTXUSER_ADMIN = NWTXUSER_ADMIN;
    }
}
