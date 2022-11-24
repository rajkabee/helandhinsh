package com.peaches.groceryStore.model.entities;

import java.sql.Date;
import java.util.HashMap;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class AdditionalProperties {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	String name;
	String value;
}
