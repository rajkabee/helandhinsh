package com.peaches.groceryStore.model.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.peaches.groceryStore.model.entities.Product;
@RestResource
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	Page<Product> findByCategoriesId(@Param("categoryId") long categoryId, Pageable pageable);
	Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);
}
