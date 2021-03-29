import React, { Component } from "react";
import { Camera } from "expo-camera";
import { View, TouchableOpacity, Image, Text } from "react-native";
import axios from "axios";

export default class CameraComp extends Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            photo: {},
            id: 0,
            position: {},
        };
        this.upload = this.upload.bind(this);
        this.snapPhoto = this.snapPhoto.bind(this);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    type={this.state.type}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: "transparent",
                            flexDirection: "row",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 0.3,
                                alignSelf: "flex-end",
                                alignItems: "center",
                            }}
                            onPress={() => {
                                this.setState({
                                    type:
                                        this.state.type ===
                                        Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                });
                                this.upload(this.state.photo.base64);
                            }}
                        >
                            <Ionicons
                                color="white"
                                size={64}
                                name="ios-reverse-camera"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.snapPhoto.bind(this)}
                            style={{
                                alignSelf: "flex-end",
                                alignItems: "center",
                                marginLeft: 60,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-slice-8"
                                size={64}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    }
}
