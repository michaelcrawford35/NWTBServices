package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXCM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NWTXCMRepository extends JpaRepository<NWTXCM, String>{
    @Override
    List<NWTXCM> findAll();
}
