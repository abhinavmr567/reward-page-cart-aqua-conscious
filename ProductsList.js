import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import {LinearGradient} from 'expo-linear-gradient';
export function ProductsList ({navigation}) {
function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <LinearGradient colors = {['#1EB5C6', '#445BCC']} style ={styles.container}>
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  productsList: {
    
  },
  container: {
    flex:1,
    backgroundColor: '#ecf0f1',
    padding: 12,
    flexDirection: 'column',
  },
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
