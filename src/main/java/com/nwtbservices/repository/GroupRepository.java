package com.nwtbservices.repository;

import com.nwtbservices.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;
// This file is from a tutorial. It is only used as an example for what to do in the actual project.
public interface GroupRepository extends JpaRepository<Group, Long>
{
    Group findByName(String name);
}
