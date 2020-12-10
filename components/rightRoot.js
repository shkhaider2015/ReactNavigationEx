import React, { Component } from 'react';
import { View, StyleSheet, Text,FlatList, TextInput, Button } from "react-native";
import { flowRight as compose } from "lodash";
import { graphql } from '@apollo/client/react/hoc';
import { user, userPost } from "./quries";





class RightRoot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue : "0",
            id : 1,
            user : {
                name : "",
                email : "",
            },
            post : [],
            loading : false,
            loadingU : false,
            error : "",
            errorU : "" 

        }
        
    }


    handleInputValue = (text) =>
    {
        var val = parseInt(text);
        if(val)
        {
            this.setState({ inputValue : text, id : val })
        }else
        {
            this.setState({ inputValue : text })
        }
        
    }
    handlePress = () => 
    {
        this.setState({ loadingU : true, loading : true })
        
       try
       {

        this.props.getUser.fetchMore({
            variables : {
                id : this.state.id
            }
        }).then((ref) => {
            this.setState({ loadingU : false})
            this.setState({ user : { name : ref.data.user.username, email : ref.data.user.email }})
            console.log(ref.data.user.email)
        }).catch((ref) => {
            console.log(ref)
            this.setState({ loadingU : false})
            this.setState({ errorU : ref})
        })

        this.props.getUserPost.fetchMore({
            variables : {
                id : this.state.id
            }
        }).then((ref) => {
            this.setState({loading : false })
            this.setState({post : ref.data.user.posts.data})
            console.log(ref)

        }).catch((ref) => {
            this.setState({loading : false })
            this.setState({ error : ref})
            console.log(e)
        })
    
        
        
       }
       catch(e)
       {
           console.log("Error : ", e)
       }

        
    }

    render() {
        return (
            <View style={styles.container} >

            <View style={styles.header} >
                <Text style={styles.heading} >GraphQl Multi Queries</Text>
            </View>

            <View>
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={text => this.handleInputValue(text)}
                    style={styles.input}
                />
                <Button
                    title="Go"
                    onPress={() => this.handlePress()}
                />

            </View>

            {/* { console.log(this.props.getUserInfo) } */}
            {this.state.loading || this.state.loadingU ? <Text>Loading ...</Text> :
            this.state.error || this.state.errorU ? <Text>Error ..</Text> : 

                <View>
                    <View>
                        <Text>User Details</Text>
                        <Text style={styles.name} > {this.state.user.name} </Text>
                        <Text style={styles.email} > {this.state.user.email} </Text>

                    </View>

                    <View>
                        <Text style={styles.postDetail} > {this.state.user.name}'s Post</Text>

                        <FlatList
                            data={this.state.post}
                            renderItem={({ item }) => (<Text style={styles.post}> {item.id} : {item.title} </Text>)}
                            keyExtractor={(item) => item.id.toString()}
                        />

                    </View>
                </View>
    }
        </View>
        );
    }
}


export default compose(
    graphql(user, { name : 'getUser', options : props => ({ variables : { id : props.id } }) }),
    graphql(userPost, { 
        name : 'getUserPost', 
        options : props => ({ variables : { id : props.id } })
    }
    )
)(RightRoot)


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