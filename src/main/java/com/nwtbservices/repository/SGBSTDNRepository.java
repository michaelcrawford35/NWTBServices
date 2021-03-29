package com.nwtbservices.repository;

import com.nwtbservices.model.SGBSTDN;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SGBSTDNRepository extends JpaRepository<SGBSTDN, String> {
    @Override
    List<SGBSTDN> findAll();

}
