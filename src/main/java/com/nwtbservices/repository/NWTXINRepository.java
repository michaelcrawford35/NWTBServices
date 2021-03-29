package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXIN;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NWTXINRepository extends JpaRepository<NWTXIN, String> {
    @Override
    List<NWTXIN> findAll();
}
