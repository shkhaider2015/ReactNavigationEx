import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from 'react-native-paper';
import { createUser } from "./quries";
import { flowRight as compose } from "lodash";
import { graphql } from '@apollo/client/react/hoc';

class LeftProfile extends Component {

    constructor(props) {
        super()

        this.state = {
            title: "",
            body: "",
            response : "None"
        }
    }

    handleInputTitle(text) {
        this.setState({
            title: text
        })

    }

    handleInputBody(text) {
        this.setState({
            body: text
        })

    }

    handlePress() {

        if (this.state.title && this.state.body) {
            console.log("Everything is ok")
            this.props.createUser({
                variables: {
                    input: {
                        title: this.state.title,
                        body: this.state.body
                    }
                }
            }).then((res) => {
                console.log(res.data.createPost)
                
                this.setState({ response : "Ok"})

            }).catch((error) =>{
                console.log(error)
                this.setState({response : "Error"})
            } )
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.name} >Enter Info</Text>

                <TextInput
                    placeholder={"Title"}
                    style={styles.input}
                    value={this.state.title}
                    onChangeText={text => this.handleInputTitle(text)}
                />

                <TextInput
                    placeholder={"Body"}
                    style={styles.input}
                    value={this.state.body}
                    onChangeText={text => this.handleInputBody(text)}
                />

                <View 
                style={styles.button} >
                <Button
                    title="Submit"
                    onPress={() => this.handlePress()}
                />
                </View>
                <Text>Responce is {this.state.response} </Text>
            </View>
        );
    }
}

// export default LeftProfile;
export default compose(
    graphql(createUser, { name: "createUser" })
)(LeftProfile)


const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    heading: {

    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    email: {
        fontSize: 12
    },
    button : {
        marginTop : 10
    },
    postDetail: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10
    },
    post: {
        marginTop: 3,
        fontStyle: 'italic'
    },
    input: {
        height: 40,
        marginTop: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
})