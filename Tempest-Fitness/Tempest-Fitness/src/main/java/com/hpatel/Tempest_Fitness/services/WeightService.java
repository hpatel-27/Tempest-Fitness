package com.hpatel.Tempest_Fitness.services;

import com.hpatel.Tempest_Fitness.models.User;
import com.hpatel.Tempest_Fitness.models.Weight;
import com.hpatel.Tempest_Fitness.repositories.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Provides access to the repository and getting Weight models
 * from the database.
 */
@Service
@Transactional
public class WeightService extends CustomService<Weight, Long> {

    /** The instance of the repository */
    @Autowired
    private WeightRepository weightRepository;

    /**
     * Provides access to the repository
     * @return The UserRepository
     */
    @Override
    protected JpaRepository<Weight, Long> getRepository() {
        return weightRepository;
    }

    /**
     * Finds a Weight model by their date
     * @param date The date to use to find a Weight
     * @return The found Weight or null
     */
    public Weight findByUserAndDate (User user, String date) {
        return weightRepository.findByUserAndDate(user, date );
    }

    /**
     * Finds all Weight model by their associated user
     * @param user The user whose Weight's to find
     * @return The found Weights list or null
     */
    public List<Weight> findByUser (User user ) {
        return weightRepository.findByUser( user );
    }
}
