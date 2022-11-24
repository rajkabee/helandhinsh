package com.peaches.groceryStore.model.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

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
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	long id;
	String name;
	String description;
	String imageUrl;
	@CreationTimestamp
	Date dateCreated;
	@UpdateTimestamp
	Date lastUpdated;
	@ManyToMany
	List<Product> products;
	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", descriotion=" + description + ", imageUrl=" + imageUrl
				+ ", dateCreated=" + dateCreated + ", lastUpdated=" + lastUpdated + "]";
	}
	
	
}
