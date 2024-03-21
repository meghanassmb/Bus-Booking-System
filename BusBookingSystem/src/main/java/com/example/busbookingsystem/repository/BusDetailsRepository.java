package com.example.busbookingsystem.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.busbookingsystem.entity.BusDetails;

@Repository
public interface BusDetailsRepository extends JpaRepository<BusDetails, Integer>{

	List<BusDetails> findAll();

	Optional<BusDetails> findBusByBusNumber(int busNumber);

	List<BusDetails>findBySourceAndDestination(String source,String destination);

	

}
