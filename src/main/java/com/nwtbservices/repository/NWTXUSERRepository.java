package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXUSER;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface NWTXUSERRepository extends JpaRepository<NWTXUSER, String> {

    @Query(value= "select nwtxuser_admin from nwtxuser where nwtxuser_user = :USR and nwtxuser_pass = :PASS", nativeQuery= true)
    public NWTXUSER findByUSR(String USR,String PASS);
}
//when term and crn =>1