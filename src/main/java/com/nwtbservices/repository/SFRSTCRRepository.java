package com.nwtbservices.repository;

import com.nwtbservices.model.SFRSTCR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SFRSTCRRepository extends JpaRepository<SFRSTCR, String> {
    @Override
    List<SFRSTCR> findAll();
}
