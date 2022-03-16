import styled from "styled-components";
import tw from "twin.macro";

export const ContainerLogin = styled.div`
${tw`md:flex`}

 img{
    ${tw`h-screen hidden md:flex`}
 }

 .content{
     ${tw`flex flex-col items-center md:items-stretch md:self-center mx-auto md:w-3/12`}
     h1{
         ${tw`text-4xl font-bold my-20`}
     }
     span{
         ${tw`text-pink-600`}
     }
     form{
        ${tw`flex flex-col gap-y-4`}
        .boxInput{
            ${tw`flex flex-col gap-y-3`}
            label{
                font-weight: 100;
            }
            input{
                ${tw`border border-gray-400 appearance-none rounded-2xl w-full px-3 py-4 focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600`}
            }
        }
        .radio{
            ${tw`flex justify-between`}
            label{
                ${tw`flex p-2 cursor-pointer font-extralight`}
                input{
                    ${tw`my-auto transform scale-125`}
                }
                div{
                    ${tw`px-2 my-auto`}
                }
            }
            .password{
                ${tw`p-2`}
                strong{
                    ${tw`text-blue-400 text-sm`}
                }

            }
        }
    }
 }
`;