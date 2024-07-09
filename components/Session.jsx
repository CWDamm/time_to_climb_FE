import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonAction from './ButtonAction';
import appStyles from '../style-sheets/app-style';

const moment = require('moment');

export default function Session({ sessionData }) {

    const handleDelete = () => {
        // TODO: update when BE APIs integrated
        // TODO: add confirmation of deletion
    };

    const handleEdit = () => {
        // TODO: update when BE APIs integrated
    };

    return (
        <View style={styles.sessionContainer}>
            <View style={styles.header}>
                <Text style={styles.wallText}>{sessionData.wall}</Text>
                <View style={styles.icons}>
                    <ButtonAction 
                        onPress={handleEdit} 
                        icon={<Ionicons name="create" color={'cornflowerblue'} size={20} />} 
                    />
                    <ButtonAction 
                        onPress={handleDelete} 
                        icon={<Ionicons name="trash" color={'red'} size={20} />} 
                    />
                </View>
            </View>
            <View style={styles.details}>
                <Text style={appStyles.standardFont}>{moment(new Date(sessionData.date)).format('DD-MM-YYYY')}</Text>
                <Text style={appStyles.standardFont}>
                    <Text style={appStyles.standardFont}>{sessionData.duration_minutes} mins</Text>
                    <Text style={appStyles.standardFont}>   Climbs: {sessionData.climb_count}</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sessionContainer: {
        padding: 15,
        marginBottom: 10,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        width: 250,
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wallText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'darkblue'
    },
    icons: {
        flexDirection: 'row',
    },
    details: {
        marginTop: 5,
    }
});
