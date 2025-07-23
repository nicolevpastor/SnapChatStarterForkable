import React, { useEffect } from "react";
import { useState } from "react";
import { Card, FAB } from "@rn-vui/themed";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AddEvent from "../components/AddEvent";
import EventInfo from "../components/EventInfo";
import { supabase } from "../utils/hooks/supabase";
export default function FavoriteScreen({ route, navigation }) {
    return (
        <View style={[styles.container]}>
            <ScrollView>
                <View>
                    <Text>Welcome to GhostPins Screen</Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})






