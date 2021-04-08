package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXDT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NWTXDTRepository extends JpaRepository<NWTXDT, String>{
    @Override
    List<NWTXDT> findAll();
}
