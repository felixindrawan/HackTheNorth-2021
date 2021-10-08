import { auth, firestore } from './config';

export const signUp = (email, password, first_name, last_name) => {
    return auth().createUserWithEmailAndPassword(email, password)
    .then(registeredUser => {
        firestore().collection('users')
        .doc(registeredUser.user.uid)
        .set({
            uid: registeredUser.user.uid,
            first_name,
            last_name,
            email,
        })
    })
}

export const signIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
}

export const signOut = () => {
    return auth().signOut();
}

export const addGroup = (name, info) => {
    const groupData = {
        name: name,
        info: info,
    }

    return firestore().collection('groups')
    .doc()
    .add(groupData)
    .then(document => {})
}

export const addMembership = (user_id, group_id) => {
    const membershipData = {
        user_id: user_id,
        group_id: group_id,
    }

    return firestore().collection('memberships')
    .doc()
    .add(membershipData)
    .then(document => {})
}

export const addSavedLocation = (group_id, location_id) => {
    const savedLocationData = {
        group_id: group_id,
        location_id: location_id,
    }

    return firestore().collection('saved_locations')
    .doc()
    .add(savedLocationData)
    .then(document => {})
}

export const addEvent = (name, info, group_id, location_id, active) => {
    const eventData = {
        name: name,
        info: info,
        group_id: group_id,
        location_id: location_id,
        active: active,
    }

    return firestore().collection('events')
    .doc()
    .add(eventData)
    .then(document => {})
}

export const getUsersInGroup = (group_id) => {
    var groupIds = []

    firestore().collection
}