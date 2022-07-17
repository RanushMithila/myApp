import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque luctus massa, nec sodales eros porttitor vel. Sed tortor libero, maximus eu elementum at, posuere id enim. Aliquam pellentesque est quis justo commodo, in pellentesque lorem rutrum. Phasellus scelerisque pulvinar purus, et convallis turpis placerat id. Phasellus euismod libero convallis, sollicitudin elit id, suscipit massa. Suspendisse potenti. Aliquam venenatis orci sapien, quis consectetur erat luctus in.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque luctus massa, nec sodales eros porttitor vel. Sed tortor libero, maximus eu elementum at, posuere id enim. Aliquam pellentesque est quis justo commodo, in pellentesque lorem rutrum. Phasellus scelerisque pulvinar purus, et convallis turpis placerat id. Phasellus euismod libero convallis, sollicitudin elit id, suscipit massa. Suspendisse potenti. Aliquam venenatis orci sapien, quis consectetur erat luctus in.',
        image: require('../assets/rmb.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/rmb.jpg')
    }
]

function MessagesScreen(props) {
    /*
    const array = useState(0);
    const count = array[0];
    const setCount = array[1];

    simplify
    */

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message
        const newMessages = messages.filter(m => m.id != message.id);
        setMessages(newMessages);
        //call the server
    }
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Msg selected', item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                          }
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/rmb.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})
export default MessagesScreen;