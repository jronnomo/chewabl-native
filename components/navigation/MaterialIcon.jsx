import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export function SwipeIcon({ style, ...rest }) {
  return <MaterialIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
