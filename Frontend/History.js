// History.js
// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// history.js

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: '1',
    date: '6 September 2023',
    time: '6 hours 14 minutes 23 seconds',
    amount: 'Rp3.000,00',
  },
  {
    id: '2',
    date: '6 September 2023',
    time: '9 hours 45 minutes 11 seconds',
    amount: 'Rp3.000,00',
  },
  {
    id: '3',
    date: '6 September 2023',
    time: '9 hours 45 minutes 11 seconds',
    amount: 'Rp3.000,00',
  },
];

const Item = ({ date, time, amount }) => (
  <View style={styles.item}>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.time}>{time}</Text>
    <Text style={styles.amount}>{amount}</Text>
  </View>
);

const History = ({ route }) => {
  const renderItem = ({ item }) => (
    <Item date={item.date} time={item.time} amount={item.amount} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <Text style={styles.balance}>Username Balance</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.navBar}>
        <Text style={styles.homeButton}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Match the background color of the login page
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Set text color to white
    marginBottom: 10,
  },
  balance: {
    fontSize: 18,
    color: 'white', // Set text color to white
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'blue', // Match the background color of the login input
    padding: 20,
    marginVertical: 8,
    borderRadius: 5, // Match the border radius of the login input
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  time: {
    fontSize: 14,
    color: 'white',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'blue', // Match the background color of the login button
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeButton: {
    fontSize: 18,
    color: 'white', // Set text color to white
  },
});

export default History;


// const History = ({ route }) => {
//   const { transactionHistory } = route.params;

//   const renderTransactionItem = ({ item }) => (
//     <View style={styles.transactionItem}>
//       <Text>Date: {item.date}</Text>
//       <Text>Duration: {item.duration} hours</Text>
//       <Text>Start Time: {item.startTime}</Text>
//       <Text>End Time: {item.endTime}</Text>
//       <Text>Price: ${item.price}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Transaction History</Text>
//       <FlatList
//         data={transactionHistory}
//         renderItem={renderTransactionItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default History;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 35,
//   },
//   header: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   transactionItem: {
//     backgroundColor: 'blue',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     width: '80%',
//   },
// });
