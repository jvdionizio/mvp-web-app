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


function SignIn() {
  return (
    <div className="w-full bg-white-smoked flex flex-col items-center">
        <Header />
        <div>
            <Heading>
                <h1 className='mt-40 text-center'>CRIAR CONTA</h1>
            </Heading>
        </div>
        <div className='text-center 
            px-20 py-5
            items-center 
            flex
            flex-col
            justify-center
            border-2 
            rounded-3xl
            w-1/4
            gap-6'>
            <div className=''></div>
                <TextInputRoot
                htmlFor="email"
                >
                    <TextInputInput
                        type="email"
                        placeholder="Nome Completo"
                        id="email"
                        name="email"
                    />
                </TextInputRoot>
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
                <TextInputRoot
                htmlFor="email"
                >
                    <TextInputInput
                        type="email"
                        placeholder="Confirmar senha"
                        id="email"
                        name="email"
                    />
                </TextInputRoot>
            
                
                
            <div className='w-full'>
                <Button>
                    <button type="button">
                        Cadastrar
                    </button>
                </Button>
            </div>
            <div>
            <Text>
                <p>Já tem uma conta na MVP?</p> 
                <Text textColor="300" decoration="underline">
                    <span> Logar </span>
                </Text>
            </Text>
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
            <br/>
        </div>
    </div>
    
    )
}
export default SignIn;