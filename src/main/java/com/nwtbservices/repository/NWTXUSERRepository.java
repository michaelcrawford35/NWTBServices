package com.nwtbservices.repository;

import com.nwtbservices.model.NWTXIN;
import com.nwtbservices.model.NWTXUSER;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NWTXUSERRepository extends JpaRepository<NWTXUSER, String> {
    @Override
    List<NWTXUSER> findAll();
}
