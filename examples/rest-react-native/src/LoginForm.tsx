import React, {useState, useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, TextInput, View} from 'react-native';
import {UserData} from './api/api.data';
import {login} from './api/endpoints';

const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState('');

  // Create a state for the user data we are going to receive
  // from the API call upon form submit.
  const [userData, setUserData] = useState<null | UserData>(null);

  // Whenever we change our username input's value
  // update the corresponding state's value.
  const handleUsernameChange = useCallback(nextUsername => {
    setUsername(nextUsername);
  }, []);

  // Handle a submit event of the form
  const handleFormSubmit = useCallback(() => {
    // Perform a POST /login request and send the username
    fetch(login, {
      method: 'POST',
      body: JSON.stringify({
        username,
      }),
    })
      .then(res => res.json())
      // Update the state with the received response
      .then(setUserData);
  }, [username]);

  return (
    <View>
      <View style={styles.inputRow}>
        <TextInput
          onChangeText={handleUsernameChange}
          onSubmitEditing={handleFormSubmit}
          placeholder={'Enter your username'}
          returnKeyType={'done'}
          underlineColorAndroid={'blue'}
          style={styles.usernameInput}
        />
        <TouchableOpacity onPress={handleUsernameChange}>
          <Text>{'Submit'}</Text>
        </TouchableOpacity>
      </View>

      {userData ? (
        <View>
          <Text>{userData.firstName}</Text>
          <Text>{userData.lastName}</Text>
          <Text>{userData.id}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameInput: {
    marginRight: 8,
  },
});
export default LoginForm;
