import React from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Platform,
    ToastAndroid
} from 'react-native';

import data from '../ClubData/data';
import Swiper from 'react-native-deck-swiper';
import { Transitioning, Transition } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { Searchbar } from 'react-native-paper'
const { width } = Dimensions.get('window');

const stackSize = 4;
const colors = {
    red: '#EC2379',
    blue: '#0070FF',
    gray: '#777777',
    white: '#ffffff',
    black: '#000000'
};
const ANIMATION_DURATION = 200;

const transition = (
    <Transition.Sequence>
        <Transition.Out
            type='slide-bottom'
            durationMs={200}
            interpolation='easeIn'
        />
        <Transition.Together>
            <Transition.In
                type='fade'
                durationMs={200}
                delayMs={100}
            />
            <Transition.In
                type='slide-bottom'
                durationMs={200}
                delayMs={100}
                interpolation='easeOut'
            />
        </Transition.Together>
    </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();
choices = [];
current = 0;
total = [];
const Card = ({ card }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
        </View>
    );
};

const CardDetails = ({ index }) => (
    <View key={data[index].id} style={{ alignItems: 'center' }}>
        <Text style={[styles.text, styles.heading]} numberOfLines={5}>
            {data[index].name}
        </Text>
        <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
    </View>
);

right = () => {
    swiperRef.current.swipeRight();
    choices = [...choices, current];
    current++;
    total++;
}

left = () => {
    swiperRef.current.swipeLeft()
    current++;
    total++;
}

details = () => {
    navigation.navigate('Details', { choices: total })
}

search = () => {
    alert("Search")
}

export default function Home({ navigation }) {
    var firstQuery;
    const [index, setIndex] = React.useState(0);
    const onSwiped = () => {
        transitionRef.current.animateNextTransition();
        setIndex((index + 1) % data.length);
        total = index
    };
    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="Enter Club Name"
                onChangeText={query => {
                    firstQuery = query
                }
                }
                value={firstQuery}
                style={{ height: 50, fontSize: 12, elevation: 10, margin: 20, borderRadius: 10 }}
                onIconPress={() => this.search()}
                onSubmitEditing={() => this.search()}
            />
            <Text style={styles.header}>RECOMMENDED CLUBS</Text>
            <MaterialCommunityIcons
                name='crop-square'
                size={width}
                color={colors.red}
                style={{
                    opacity: 0.05,
                    transform: [{ rotate: '45deg' }, { scale: 1.6 }],
                    position: 'absolute',
                    left: -15,
                    top: 30
                }}
            />
            <StatusBar hidden={false} />
            <View style={styles.swiperContainer}>
                <Swiper
                    ref={swiperRef}
                    cards={data}
                    cardIndex={index}
                    renderCard={card => <Card card={card} />}
                    infinite
                    backgroundColor={'transparent'}
                    onSwiped={onSwiped}
                    onTapCard={() => this.right()}
                    cardVerticalMargin={50}
                    stackSize={stackSize}
                    stackScale={10}
                    stackSeparation={14}
                    animateOverlayLabelsOpacity
                    animateCardOpacity
                    disableTopSwipe
                    disableBottomSwipe
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: colors.red,
                                    borderColor: colors.red,
                                    color: colors.white,
                                    borderWidth: 1,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 20,
                                    marginLeft: -20
                                }
                            }
                        },
                        right: {
                            title: 'LIKE',
                            style: {
                                label: {
                                    backgroundColor: colors.blue,
                                    borderColor: colors.blue,
                                    color: colors.white,
                                    borderWidth: 1,
                                    fontSize: 24
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 20,
                                    marginLeft: 20
                                }
                            }
                        }
                    }}
                    useViewOverflow={Platform.OS === 'ios'}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Transitioning.View
                    ref={transitionRef}
                    transition={transition}
                    style={styles.bottomContainerMeta}
                >
                    <CardDetails index={index} />
                </Transitioning.View>
                <View style={styles.bottomContainerButtons}>
                    <MaterialCommunityIcons.Button
                        name='close'
                        size={94}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={colors.red}
                        onPress={() => this.left()}
                    />
                    <MaterialCommunityIcons.Button
                        name='check'
                        size={94}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={colors.blue}
                        onPress={() => this.right()}
                    />
                    <MaterialCommunityIcons.Button
                        name='question'
                        size={94}
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        activeOpacity={0.3}
                        color={colors.gray}
                        onPress={() => navigation.navigate('Details', { choices: index })}
                    />
                </View>
            </View>
            <AnimateLoadingButton
                ref={c => (this.myClubsButton = c)}
                width={300}
                height={40}
                style={{ margin: 20 }}
                title="See My Clubs"
                titleFontSize={20}
                titleColor="green"
                backgroundColor="white"
                borderRadius={4}
                onPress={() => navigation.navigate('MyClubs', { choices: choices })}
                margin={10}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    swiperContainer: {
        flex: 0.55
    },
    bottomContainer: {
        flex: 0.45,
        justifyContent: 'space-evenly'
    },
    bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
    bottomContainerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    cardImage: {
        width: 160,
        flex: 1,
        resizeMode: 'contain'
    },
    card: {
        flex: 0.45,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: colors.black,
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: colors.white,
        backgroundColor: 'transparent'
    },
    header: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        letterSpacing: 10,
        color: 'black',
        marginBottom: 0,
        //       fontWeight: 'bold',
    },
    text: { fontFamily: 'Courier' },
    heading: { marginLeft: 10, fontSize: 14, marginBottom: 10, color: colors.gray },
    price: { color: colors.blue, fontSize: 32, fontWeight: '500' }
});