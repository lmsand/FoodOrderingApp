import { View } from 'react-native';
import products from '@/src/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';



export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
