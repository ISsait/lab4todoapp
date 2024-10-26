import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {useState} from 'react';

type ToDoListProps = {
    tasks: string[]
    addTask: (task: string) => void
    clearTasks: () => void
}

export default function ToDoList({tasks, addTask, clearTasks} : ToDoListProps): React.JSX.Element {
    const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(text: string) {
        console.log(text);
        const newTaskText = text;
        setNewTask(newTaskText);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ToDoList</Text>
            <View style={styles.divider}/>
            <View>
                {tasks.map((task, index) => (
                    <View style={styles.taskItem}>
                        <BouncyCheckbox
                            size={30}
                            fillColor="green"
                            onPress={(isChecked: boolean) => {
                                Alert.alert(`Task ${task} is ${isChecked ? 'complete' : 'not complete'}`);
                                }
                            }
                            />
                        <Text key={index} style={styles.taskTxt}>{task}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.addTaskView}>
                <TextInput
                    placeholder="Add a task"
                    style={styles.newTaskInput}
                    value={newTask}
                    onChangeText={handleNewTaskChange}
                    />
                <TouchableOpacity
                    style={styles.addTaskTouchableOpacity}
                    onPress={() => {addTask(newTask); setNewTask('');}}
                    >
                    <Text style={{color: 'white'}}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.clearTouchableOpacity}
                onPress={() => clearTasks()}
                >
                <Text style={{color: 'white'}}>Clear All Tasks</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    taskItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    taskTxt: {
        fontSize: 20,
        marginLeft: 10,
    },

    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginVertical: 10,
    },

    addTaskView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },

    addTaskTouchableOpacity: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    newTaskInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '70%',
        borderRadius: 5,
    },

    clearTouchableOpacity: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
});
