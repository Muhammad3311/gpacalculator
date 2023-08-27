// /**
//  * Used to navigating without the navigation prop
//  * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
//  *
//  * You can add other navigation functions that you need and export them
//  */
import * as React from 'react';
import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

// export const navigationRef = React.createRef()
// export const isReadyRef = React.createRef()

// RN 6

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // console.log('navigate called', name, params);
    // console.tron.log('Navig service: ', name, params)
    // Perform navigation if the app has mounted
    navigationRef.navigate(name, params);
  }
}

// For multiple nesting navigation
// https://reactnavigation.org/docs/nesting-navigators/
// export function nestingNavigate(name, screen, params) {
//   if (navigationRef.isReady()) {
//     console.tron.log('Navig service: ', name, screen, params)
//     // Perform navigation if the app has mounted
//     navigationRef.navigate(name, { screen, params })
//   }
// }

export function navigateAndReset(name, params) {
  // console.tron.log('In side navigateAndReset called with: ', name, params)
  if (navigationRef.isReady()) {
    // console.log('navigateAndReset called', name, params);
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
}

// export function navigate(name, params) {
//   // Perform navigation if the app has mounted
//   console.tron.log('navigate called', isReadyRef.current, navigationRef.current)
//   if (isReadyRef.current && navigationRef.current) {
//     // Perform navigation if the app has mounted
//     navigationRef.current?.navigate(name, params)
//   }
// }

// export function navigateAndReset(name, params) {
//   console.tron.log('In side navigateAndReset called with: ', name, params)
//   if (isReadyRef.current && navigationRef.current) {
//     console.tron.log('navigateAndReset called', isReadyRef.current, navigationRef.current)

//     navigationRef.current?.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name, params }],
//       }),
//     )
//   }
// }

// export function navigateAndSimpleReset(name, index = 0) {
//   navigationRef.current?.dispatch(
//     CommonActions.reset({
//       index,
//       routes: [{ name }],
//     }),
//   )
// }

export function push(name, params) {
  navigationRef.dispatch(StackActions.push(name, params));
}
