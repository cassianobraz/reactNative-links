import { categories } from "@/Utils/Categories";
import { Category } from "@/components/category";
import { FlatList } from "react-native";
import { styles } from "./styles";

type Props = {
  selected: string
  onChange: (category: string) => void
};

export function Categories({ onChange, selected }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category 
          name={item.name} 
          icon={item.icon} 
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}