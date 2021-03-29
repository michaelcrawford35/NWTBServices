package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXAR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NWTXARRepository extends JpaRepository<NWTXAR, String> {
    @Override
    List<NWTXAR> findAll();
}
