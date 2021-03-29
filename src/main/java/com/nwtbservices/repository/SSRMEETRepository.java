package com.nwtbservices.repository;

import com.nwtbservices.model.SSRMEET;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SSRMEETRepository extends JpaRepository<SSRMEET, String> {
    @Override
    List<SSRMEET> findAll();
    @Query(value= "select * from ssrmeet where ssrmeet_crn= :CRN and ssrmeet_term_code= :Code", nativeQuery= true)
    public SSRMEET findByCRN(String Code,String CRN);
}
//when term and crn =>1
