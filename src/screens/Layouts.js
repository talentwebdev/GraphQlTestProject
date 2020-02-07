import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import styles from './style';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import ImagePicker from 'react-native-image-picker';

const getDataQuery = gql`
  {
    data {
      email
      phone
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class Layouts extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet',
      avatarSource: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = values => {};

  componentDidAppear() {
    this.setState({text: 'componentDidAppear'});
  }

  componentDidDisappear() {
    console.log('componentDidDisappear');
  }

  navigationButtonPressed({buttonId}) {
    // a navigation-based button (for example in the topBar) was clicked. See section on buttons.
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  onUpload() {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    const {email, phone} = this.props.data;
    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    });

    return (
      <ApolloProvider client={client}>
        <Formik
          initialValues={{email: email, phone: phone}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          {({handleChange, values, handleSubmit, errors}) => (
            <View style={styles.root}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="#FFF"
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <Text style={{color: 'red'}}>{errors.email}</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Phone"
                placeholderTextColor="#FFF"
                name="phone"
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              <TouchableOpacity style={styles.back_btn} onPress={this.onUpload}>
                <Text style={styles.text}>Get Started</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.back_btn} onPress={handleSubmit}>
                <Text style={styles.text}>Get Started</Text>
              </TouchableOpacity>
              <Image
                source={this.state.avatarSource}
                style={styles.uploadAvatar}
              />
            </View>
          )}
        </Formik>
      </ApolloProvider>
    );
  }
}

export default graphql(getDataQuery)(Layouts);
