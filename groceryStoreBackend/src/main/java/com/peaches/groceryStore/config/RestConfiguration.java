package com.peaches.groceryStore.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.peaches.groceryStore.model.entities.Category;
import com.peaches.groceryStore.model.entities.Product;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class RestConfiguration implements RepositoryRestConfigurer{

//    private EntityManager entityManager;
//
//    @Autowired
//    public RestConfiguration(EntityManager theEntityManager) {
//        entityManager = theEntityManager;
//    }
//
//
//    
//    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
//
//        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
//
//        // disable HTTP methods for Product: PUT, POST and DELETE
//        config.getExposureConfiguration()
//                .forDomainType(Product.class)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
//
//        // disable HTTP methods for ProductCategory: PUT, POST and DELETE
//        config.getExposureConfiguration()
//                .forDomainType(Category.class)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
//
//        // call an internal helper method
//        exposeIds(config);
//    }
//
//    private void exposeIds(RepositoryRestConfiguration config) {
//
//        // expose entity ids
//        //
//
//        // - get a list of all entity classes from the entity manager
//        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
//
//        // - create an array of the entity types
//        List<Class> entityClasses = new ArrayList<>();
//
//        // - get the entity types for the entities
//        for (EntityType tempEntityType : entities) {
//            entityClasses.add(tempEntityType.getJavaType());
//        }
//
//        // - expose the entity ids for the array of entity/domain types
//        Class[] domainTypes = entityClasses.toArray(new Class[0]);
//        config.exposeIdsFor(domainTypes);
//    }
    
    
    
      @PersistenceContext
      private EntityManager entityManager;

      @Override
      public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
           //TODO: Expose for specific entity!
           //config.exposeIdsFor(Officer.class);
           //config.exposeIdsFor(Position.class);

           //TODO: Expose id for all entities!
           entityManager.getMetamodel().getEntities().forEach(entity->{
                try {
                     System.out.println("Model: " + entity.getName());
                     Class<? extends Object> clazz = Class.forName(String.format("com.peaches.groceryStore.model.entities.%s", entity.getName()));
                     config.exposeIdsFor(clazz);
                } catch (Exception e) {
                     System.out.println(e.getMessage());
                }
            });
    }
}