import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default class PreLoader extends Component {
    render() {
        return (
            <View style={styles.preLoaderView}>
                <ActivityIndicator
                    color="fff"
                    size="large"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preLoaderView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#009929"
    }
});