package com.hpatel.Tempest_Fitness.repositories;

import com.hpatel.Tempest_Fitness.models.Weight;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository is used to find the specific Weight models from the database.
 * Spring will generate appropriate code with JPA.
 */
public interface WeightRepository extends JpaRepository<Weight, Long> {
    /**
     * Finds a Weight object with the provided date.
     *
     * @param date date of the weigh-in
     * @return Found weight, null if none.
     */
    Weight findByDate (String date);
}
