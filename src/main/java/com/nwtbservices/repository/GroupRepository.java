package com.nwtbservices.repository;

import com.nwtbservices.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long>
{
    Group findByName(String name);
}
