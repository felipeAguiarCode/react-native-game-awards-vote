import {NavigationContainer} from '@react-navigation/native'

import {StackRoutes} from './stackRoutes'

export function Routes(){
  return(
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
  )
}