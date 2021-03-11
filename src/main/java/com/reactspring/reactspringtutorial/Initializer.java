package com.reactspring.reactspringtutorial;

import com.reactspring.reactspringtutorial.model.Group;
import com.reactspring.reactspringtutorial.model.Event;
import com.reactspring.reactspringtutorial.repository.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collection;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner
{
    private final GroupRepository groupRepo;

    public Initializer(GroupRepository groupRepo)
    {
        this.groupRepo = groupRepo;
    }

    @Override
    public void run(String... strings)
    {
        Stream.of("Denver JUG", "Utah JUG", "Seattle JUG",
                "Richmond JUG").forEach(name ->
                groupRepo.save(new Group(name))
        );

        Group denverJug = groupRepo.findByName("Denver JUG");
        Event e = Event.builder().title("Full Stack Reactive")
                .description("Reactive with Spring Boot + React")
                .date(Instant.parse("2021-03-09T20:00:00.000Z"))
                .build();
        denverJug.setEvents(Collections.singleton(e));
        groupRepo.save(denverJug);

        groupRepo.findAll().forEach(System.out::println);
    }
}
