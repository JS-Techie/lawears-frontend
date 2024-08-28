
import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated, TouchableWithoutFeedback } from "react-native";
import { Chip } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons"; 
import CloseIcon from '@/assets/logo/VectorcloseButton.svg'
import { queryTypeInterface } from "@/interfaces/query";

interface CustomChipAccordianType {
  placeholderMinHeight ?: number
  dropListHeight ?: number
  listItemPadY ?: number
  listItemPadX ?: number
  windowHeight ?: number
  windowWidth ?: number
  animatedTimingDuration ?: number
  expanded ?: boolean
  disabled ?: boolean
  itemsSelected ?: queryTypeInterface[]
  listItemData ?: queryTypeInterface[]
  handleItemSelectionChange : (newSelectedItems : queryTypeInterface[]) => void
}

const CustomChipAccordion:  React.FC<CustomChipAccordianType> = ({placeholderMinHeight = 60, dropListHeight = 180, listItemPadY = 15, listItemPadX = 30, windowHeight = 900, windowWidth = 450, animatedTimingDuration = 100, expanded = false, disabled = false, itemsSelected = [], handleItemSelectionChange,
                                                                                                                                listItemData = [
                                                                                                                                  { id: '7709fa1a-0f15-4826-8b97-74d0eb06465a', title: 'Contract Drafting' },
                                                                                                                                  { id: 'c3daa0af-dc0e-45ce-b06e-b519b80234ac', title: 'Legal Advice' },
                                                                                                                                  { id: 'ee15f90f-9f35-47fd-b54f-4a0ac0366fc0', title: 'Document Review' },
                                                                                                                                  { id: '90aff834-bb08-473d-9f1d-8e03be3aeb2e', title: 'Dispute Resolution' }
                                                                                                                                ]
}) => {
  const [isOpen, setIsOpen] = useState(expanded);
  const [selectedItems, setSelectedItems] = useState<queryTypeInterface[]>(itemsSelected);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: animatedTimingDuration ,
      useNativeDriver: true,
    }).start();
    
    !disabled && setIsOpen(!isOpen);
  };

  const handleItemSelect = (item: queryTypeInterface) => {
    if (!itemsSelected.includes(item)) {
      // setSelectedItems((prev) => [...prev, item]);
      handleItemSelectionChange([...itemsSelected, item])
    }
    toggleAccordion();
  };


  const arrowRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });


  const listHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dropListHeight],
  });

  return (
    <View className="w-full h-full">
      <TouchableOpacity 
        onPress={() => !disabled && toggleAccordion()}
        className="w-full bg-Neutral-10 rounded-md p-[2%] flex-row justify-between items-center"
        style={{minHeight: placeholderMinHeight }}
      >
        <>
          <View className="flex-row flex-wrap w-[85%]">
            {itemsSelected.length === 0 ? (
              <Text className="text-Neutral-5 font-c px-[6%]" style={{fontSize: 10}}>Select legal query category/s</Text>
            ) : (
              itemsSelected.map((item, index) => (
                <Chip
                  key={index}
                  className="mx-2 bg-primary-foreground"
                  textStyle={{color: 'white', fontFamily: 'Caros', fontSize: windowHeight*0.012}}
                  closeIcon={() => <CloseIcon height={windowHeight*0.012} width={windowWidth*0.05} fill={'#5F90D7'}/> }
                  onClose={() => 
                    // setSelectedItems(itemsSelected.filter((i) => i !== item))
                    handleItemSelectionChange(itemsSelected.filter((i) => i !== item))
                  }
                >
                  {item.title}
                </Chip>
              ))
            )}
          </View>
          <Animated.View className={'w-[15%] items-center justify-center'} style={{ transform: [{ rotate: arrowRotation }] }}>
            <MaterialIcons name="keyboard-arrow-down" size={windowWidth*0.05} color="#60686C"/>
          </Animated.View>
        </>
      </TouchableOpacity>

      <Animated.View style={{ height: listHeight, overflow: "hidden" }}>
        <FlatList
          data={listItemData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => handleItemSelect(item)}
              style={{ paddingLeft: listItemPadX, paddingRight: listItemPadX, paddingTop: listItemPadY, paddingBottom: listItemPadY }}
              >
              <Text className="font-c text-Neutral-2" style={{fontSize: windowWidth*0.027}}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
};

export default CustomChipAccordion;
