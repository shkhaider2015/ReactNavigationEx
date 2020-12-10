import { gql, useQuery } from '@apollo/client';
// import { gql, useQuery } from "@apollo/react-hoc";
import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native'



const LeftRoot= () => {
    const [id, setId] = React.useState(1)
    const queries = {
        user: gql`query {
            user(id: ${id}) {
              id
              username
              email
              address {
                geo {
                  lat
                  lng
                }
              }
            }
          }
          `,
        user_posts: gql`query {
            user(id: ${id}) {
              posts {
                data {
                  id
                  title
                }
              }
            }
          }`
    }

    const [inputValue, setInputValue] = React.useState("0")

    const queryMultiple = () => 
    {
        const res1 = useQuery(queries.user)
        const res2 = useQuery(queries.user_posts)

        return [res1, res2]
    }

    const [
        { loading: loading1, error: error1, data: data1 },
        { loading: loading2, error: error2, data: data2 }
    ] = queryMultiple();



    if (error2) {
        console.error(error2)
        return (
            <View>
                <Text>User's Post Error</Text>
            </View>
        )
    }
    if (error1) {
        console.error(error1)
        return (
            <View>
                <Text>User Error</Text>
            </View>
        )
    }



    const handlePress = () => {
        if (parseInt(inputValue) !== 0) {
            if (parseInt(inputValue)) {
                setId(parseInt(inputValue))
            }
        }
    }

    return (
        <View style={styles.container} >

            <View style={styles.header} >
                <Text style={styles.heading} >GraphQl Multi Queries</Text>
            </View>

            <View>
                <TextInput
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    style={styles.input}
                />
                <Button
                    title="Go"
                    onPress={() => handlePress()}
                />

            </View>

            {loading2 || loading1 ? <Text>Loading ...</Text> :
            error2 || error1 ? <Text>Error ..</Text> :

                <View>
                    <View>
                        <Text>User Details</Text>

                        <Text style={styles.name} > {data1.user.username} </Text>
                        <Text style={styles.email} > {data1.user.email} </Text>

                    </View>

                    <View>
                        <Text style={styles.postDetail} > {data1.user.username}'s Post</Text>

                        <FlatList
                            data={data2.user.posts.data}
                            renderItem={({ item }) => (<Text style={styles.post}> {item.id} : {item.title} </Text>)}
                            keyExtractor={(item) => item.id.toString()}
                        />

                    </View>
                </View>
            }
        </View>
    )
}

export {LeftRoot};



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