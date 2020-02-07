import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 12,
  },
  textInput: {
    width: '80%',
    borderColor: '#FFF',
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
    color: '#FFF',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  back_btn: {
    width: '80%',
    height: 35,
    borderRadius: 20,
    backgroundColor: '#09A2E1',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default styles;
