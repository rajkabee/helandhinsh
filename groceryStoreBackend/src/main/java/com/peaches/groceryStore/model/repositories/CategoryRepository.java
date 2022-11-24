package com.peaches.groceryStore.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.peaches.groceryStore.model.entities.Category;
@RestResource
@CrossOrigin("http://localhost:4200")
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
