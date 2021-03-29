package com.nwtbservices.repository;

import com.nwtbservices.model.SSBSECT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SSBSECTRepository extends JpaRepository<SSBSECT, String> {
    @Override
    List<SSBSECT> findAll();
    @Query(value= "select * from ssbsect where ssbsect_crn= :CRN and ssbsect_term_code= :Code", nativeQuery= true)
    public SSBSECT findByCRN(String Code, String CRN);
}
