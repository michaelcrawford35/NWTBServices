package com.nwtbservices.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="NWTXUSER")
public class NWTXUSER
{
    enum actType{
        student,
        supervisor
    };

    @Id
    @Column(name="NWTXUSER_USER")
    private String user;
    @Column(name="NWTXUSER_PASS")
    private String password;
    //TODO: Eventually change default account type.
    @Column(name="NWTXUSER_ADMIN")
    private actType NWTXUSER_ADMIN;
}
