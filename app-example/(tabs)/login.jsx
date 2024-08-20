import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

const logoImg = require('@/assets/images/adaptive-icon.png');

export default function Login() {
  return (
    <View style={styles.background}>
      <View style={{ padding: 60 }}>
        <Text>
          Login <Text style={{ color: 'white' }}>Here</Text>
        </Text>
      </View>
      {/* <Image source={logoImg} style={{ height: 300, width: 300 }} /> */}
      {/* specifying width and height is required for remote images  */}
      {/* <Image source={{ uri: 'https://picsum.photos/200' }} style={{ height: 300, width: 300, left: 25 }} /> */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>

    // Scroll view should be bounded by some height contraint. In this case, it's bounded by the parent View's flex: 1 and padding: 60
    // <View style={styles.background}>
    // <ScrollView>
    //   <Image source={logoImg} style={{ height: 300, width: 300 }} />
    //   <Text>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil sapiente quos nostrum maiores est
    //     nobis eaque? Facilis alias pariatur laboriosam officiis fuga. Autem quas error dolore! Modi, rem in?Lorem
    //     ipsum, dolor sit amet consectetur adipisicing elit. Est nulla quo dolores optio soluta corporis vero a
    //     molestias ut. Alias a quibusdam inventore sunt repellat omnis id laboriosam, nostrum fugit?Lorem ipsum, dolor
    //     sit amet consectetur adipisicing elit. Autem architecto velit recusandae officiis alias ipsum sunt ipsa
    //     repellat vel tempora qui, dignissimos cum eligendi voluptates molestiae suscipit rem reprehenderit animi!Lorem
    //   </Text>
    //   <Text>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil sapiente quos nostrum maiores est
    //     nobis eaque? Facilis alias pariatur laboriosam officiis fuga. Autem quas error dolore! Modi, rem in?Lorem
    //     ipsum, dolor sit amet consectetur adipisicing elit. Est nulla quo dolores optio soluta corporis vero a
    //     molestias ut. Alias a quibusdam inventore sunt repellat omnis id laboriosam, nostrum fugit?Lorem ipsum, dolor
    //     sit amet consectetur adipisicing elit. Autem architecto velit recusandae officiis alias ipsum sunt ipsa
    //     repellat vel tempora qui, dignissimos cum eligendi voluptates molestiae suscipit rem reprehenderit animi!Lorem
    //   </Text>
    //   <Image source={logoImg} style={{ height: 300, width: 300 }} />
    // </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'plum',
  },
});
