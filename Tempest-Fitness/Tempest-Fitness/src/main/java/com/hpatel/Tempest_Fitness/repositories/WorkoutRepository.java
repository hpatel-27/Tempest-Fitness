package com.hpatel.Tempest_Fitness.repositories;

import com.hpatel.Tempest_Fitness.models.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository is used to find the specific Workout models from the database.
 * Spring will generate appropriate code with JPA.
 */
public interface WorkoutRepository extends JpaRepository<Workout, Long> {

    /**
     * Finds a Workout object with the provided date.
     *
     * @param date date of the workout
     * @return Found workout, null if none.
     */
    Workout findByDate (String date);
}
