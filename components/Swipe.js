import React, { Component } from 'react';
import { View, Text, Image, Animated, PanResponder, Dimensions, UIManager, LayoutAnimation } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Swipe extends Component {

    constructor(props) {
        super(props);
        this.state = { index: 0 };
        this.position = new Animated.ValueXY();
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
              this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            onPanResponderRelease: (evt, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                  this.forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                  this.forceSwipe('left');
                } else {
                  this.resetPosition();
                }
              }
          });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data) {
          this.setState({
            index: 0
          })
        }
      }

    onSwipeComplete = (direction) => {
        const { data } = this.props;
        const item = data[this.state.index];
    
        direction === 'right' ? this.props.onSwipeRight(item) : this.props.onSwipeLeft(item);
        this.position.setValue({ x: 0, y: 0 });
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
        this.setState({ index: this.state.index + 1 });
      }

      forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH  : -SCREEN_WIDTH;
        Animated.timing(this.position, {
          toValue: { x, y: 0 },
          duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));
      }

    resetPosition = () => {
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 }
        }).start();
      }

    getCardStyle = () => {
        const { position } = this;
        const rotate = position.x.interpolate({
          inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
          outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
          };
    }

    renderCards = () => {
        if (this.state.index >= this.props.data.length) {
          return this.props.renderNoMoreCards();
        }
    
        return this.props.data.map((item, i) => {
          if (i < this.state.index) { return null; }
    
          if (i === this.state.index) {
            return (
              <Animated.View
                key={item[this.props.keyProp]}
                style={[this.getCardStyle(), styles.cardStyle, { zIndex: 99 }]}
                {...this._panResponder.panHandlers}
              >
                {this.props.renderCard(item)}
              </Animated.View>
            );
          }
    
          return (
            <View
              key={item[this.props.keyProp]}
              style={[styles.cardStyle, { top: 20 * (i - this.state.index), zIndex: 5 }]}
            >
              {this.props.renderCard(item)}
            </View>
          );
        }).reverse();
    
     };

  render() {
    return (
    <View>{this.renderCards()}</View>
    );
  }
}

const styles = {
  detailWrapper: {
    justifyContent: 'space-around',
    marginBottom: 10
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

export default Swipe;