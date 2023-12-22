import React, { useState } from "react";
import { 
    HeaderContainer,
    Greeting,
    GreetingText,
    GreetingVip,
    DivImageUser,
    ImageUser,
    RaioHeader
} from './styles';

import vip from '@assets/vip.png';
import raio from '@assets/raio.png';
import icon from '@assets/icon.png';

export function Header(){
    const [userVip, setUserVip] = useState(true);

    return (
        <HeaderContainer>
            <Greeting>
                { userVip && <GreetingVip source={vip} /> }
                <GreetingText> Treino Freestyle </GreetingText>
            </Greeting>
            
            {/* 
            <DivImageUser>
                <ImageUser source={icon} />
            </DivImageUser>
            */}
            
            <RaioHeader source={raio} />
        </HeaderContainer>
    )
}