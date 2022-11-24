package com.peaches.groceryStore.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.peaches.groceryStore.model.entities.AdditionalProperties;

public interface AdditionalPropertiesRepository extends JpaRepository<AdditionalProperties, Long> {

}
