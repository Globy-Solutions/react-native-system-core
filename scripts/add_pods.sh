#!/bin/bash

add_pods() {
  local file="./example/ios/Podfile"
  local target_line="use_native_modules!"
  local new_text="$target_line\n\n\tpod 'MMKV', '1.3.5'\n\tpod 'MMKVCore', '1.3.5'\n\tpod 'react-native-mmkv', '2.12.2'\n\tpod 'RNGestureHandler', '2.16.2'\n\tpod 'RNCMaskedView', '0.1.11'\n\tpod 'RNReanimated', '3.12.0'\n\tpod 'RNScreens', '3.31.1'\n\tpod 'react-native-safe-area-context', '4.10.4'"

  if grep "$target_line" "$file"; then
    sed -i '' "s/$target_line/$new_text/" "$file"
    echo "Successfully added text to '$file'"
  else
    echo "Target line not found in '$file'"
  fi
}

add_pods
