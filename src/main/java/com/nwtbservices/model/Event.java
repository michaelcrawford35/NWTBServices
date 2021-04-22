package com.nwtbservices.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.time.Instant;
import java.util.Set;
// This file is from a tutorial. It is only used as an example for what to do in the actual project.
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Event
{
    @Id
    @GeneratedValue
    private Long id;
    private Instant date;
    private String title;
    private String description;
    @ManyToMany
    private Set<NWTXUSER> attendees;
}
