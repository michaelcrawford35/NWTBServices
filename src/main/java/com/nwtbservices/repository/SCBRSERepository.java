package com.nwtbservices.repository;

import com.nwtbservices.model.SCBCRSE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SCBRSERepository extends JpaRepository<SCBCRSE, String> {
    @Override
    List<SCBCRSE> findAll();
}
