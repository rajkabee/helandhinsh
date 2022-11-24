package com.peaches.groceryStore.model.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	long id;
	String sku;
	String name;
	String manufacturer;
	String description;
	String imageUrl;
	boolean active;
	float unitPrice;
	int quantity;
	@ManyToMany
	List<Category> categories;
	@CreationTimestamp
	Date dateCreated;
	@UpdateTimestamp
	Date lastUpdated;
	@OneToMany
	List<AdditionalProperties> properties;

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", manufacturer=" + manufacturer + ", description="
				+ description + ", imageUrl=" + imageUrl + ", unitPrice=" + unitPrice + ", quantity=" + quantity
				+ ", dateCreated=" + dateCreated + ", lastUpdated=" + lastUpdated + ", properties=" + properties + "]";
	}
	
	
	
}
