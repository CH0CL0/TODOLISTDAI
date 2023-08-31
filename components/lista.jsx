import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

const Lista = () => {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addTask = () => {
    if (item.trim() !== "") {
      setLista([...lista, item]);
      setItem("");
      setIsModalVisible(false); // Cerrar el modal después de agregar la tarea
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...lista];
    updatedTasks.splice(index, 1);
    setLista(updatedTasks);
  };
  const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };
  return (
    <View style={styles.principal}>
      <Text style={styles.title}>Todo List</Text>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={item}
              onChangeText={setItem}
              placeholder="Ingresa una tarea..."
            />
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
              <Text style={styles.buttonText}>Añadir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {lista.map((task, index) => (
        <View style={styles.taskContainer} key={index}>
          <Text style={styles.taskText} onClick={handleClick}>{task}</Text>
          <TouchableOpacity
            onPress={() => removeTask(index)}
            style={styles.removeButton}
          >
            <Text style={styles.removeButtonText}>Borrar</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.openModalButton}
      >
        <Text style={styles.openModalButtonText}>Nueva tarea +  </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    padding:10,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  openModalButton: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  openModalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Lista;
