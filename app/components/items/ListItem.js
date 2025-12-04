import React from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'

import theme from '~/styles/theme'

const ListItem = ({ title, onPress, icon, iconButton, iconPress }) => {
  return (
    <Pressable
      style={styles.item}
      onPress={onPress}
    >
      {icon && (
        <Icon name={icon} size={20} color={theme.primaryText} style={{ marginRight: 10 }} />
      )}
      <Text style={styles.title}>{title}</Text>

      {iconButton && (
        <Pressable
          onPress={iconPress}
          style={{
          }}>
            <Icon name={iconButton} size={20} color={theme.primaryText} />
        </Pressable>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 15,
    // shadowBottom
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: theme.secondaryBack,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: theme.primaryText,
    fontSize: 16,
    flex: 1,
    textAlign: 'left',
    writingDirection: 'ltr',
  },
})

export default ListItem