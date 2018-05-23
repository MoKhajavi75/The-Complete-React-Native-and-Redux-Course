import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    if (this.props.library.id === this.props.selectedLibraryId) {
      return <Text>{this.props.library.description}</Text>;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{this.props.library.title}</Text>
          </CardSection>

          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(mapStateToProps, actions)(ListItem);
