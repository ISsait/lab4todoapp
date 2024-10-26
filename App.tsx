import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './src/ToDoList';
import {useState} from 'react';

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    console.log(`Task added: ${task}`);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i] === task) {
        Alert.alert(`Task "${task}" already exists`);
        return;
      }
    }
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    Alert.alert(`Task "${task}" added`);
  };

  const clearTasks = () => {
    setTasks([]);
    Alert.alert('All Tasks Cleared')
  };

  return (
    <SafeAreaView style={styles.app}>
      <ToDoList tasks={tasks} addTask={addTask} clearTasks={clearTasks}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'beige',
  }
});

export default App;
