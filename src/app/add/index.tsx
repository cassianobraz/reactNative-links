import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { Button } from '@/components/button';
import { Categories } from '@/components/categories';
import { Input } from '@/components/input';
import { colors } from "@/styles/colors";
import { router } from 'expo-router';
import { useState } from 'react';
import { styles } from "./styles";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    if (!category){
      return Alert.alert("Categoria", "Selecione a categoria");
    }

    if (!name.trim()){
      return Alert.alert("Nome", "Insira o nome");
    }

    if (!url.trim()){
      return Alert.alert("URL", "Insira a URL");
    }

    console.log({ category, name, url });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[ 200 ]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories selected={category} onChange={setCategory} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}