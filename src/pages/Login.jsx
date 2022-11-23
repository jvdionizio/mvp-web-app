import React from 'react';
import Header from '../components/Header';
import Text from '../components/styles/Text';
import TextInputIcon from '../components/styles/TextInputIcon';
import TextInputInput from '../components/styles/TextInputInput';
import TextInputRoot from '../components/styles/TextInputRoot';
import Button from '../components/styles/Button';
import { FacebookLogo, GoogleLogo } from 'phosphor-react';
import Icon from '../components/styles/Icon';
import Heading from '../components/styles/Heading';


function Login() {
  return (
    <div className="w-full bg-white-smoked flex flex-col items-center">
        <Header />
        <div>
            <Heading>
                <h1 className='mt-40 text-center'>LOGIN</h1>
            </Heading>
        </div>
        <div className='text-center 
            px-20 py-10
            items-center 
            flex
            flex-col
            justify-center
            border-2 
            rounded-3xl
            w-1/4
            gap-6'>
            
                <TextInputRoot
                htmlFor="email"
                >
                    <TextInputInput
                        type="email"
                        placeholder="E-mail"
                        id="email"
                        name="email"
                    />
                </TextInputRoot>
                <TextInputRoot
                htmlFor="email"
                >
                    <TextInputInput
                        type="email"
                        placeholder="Senha"
                        id="email"
                        name="email"
                    />
                </TextInputRoot>
            
            <div className='w-full'>
                <Text decoration="underline" textColor="300">
                    <p className='pb-6'>Esqueceu sua senha?</p>
                </Text>
                <Button>
                    <button type="button">
                        Fazer Login
                    </button>
                </Button>
            </div>
            <div>
            <Text>
                <p>Caiu de paraquedas na MVP?</p> 
                <Text textColor="300" decoration="underline">
                    <span> Cadastre-se</span>
                </Text>
            </Text>
            </div>
                <hr />
                <div className="flex flex-row justify-evenly gap-10">
                    
                    <div className= "flex flex-row justify-evenly gap-10">
                        <Button>
                            <button className='flex flex-row items-center gap-3' type="button">
                            <Icon weight="fill">
                                <FacebookLogo />
                            </Icon>
                                Facebook
                            </button>
                        </Button>
                    </div>
                    <div>
                        <Button>
                            <button className='flex flex-row items-center gap-3' type="button">
                            <Icon weight="fill">
                                <GoogleLogo />
                            </Icon>
                                Google
                            </button>
                        </Button>
                    </div>
                </div>
        </div>
        <div className='bg-white-smoked mb-200'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>   
        </div>
    </div>
    )
}
export default Login;